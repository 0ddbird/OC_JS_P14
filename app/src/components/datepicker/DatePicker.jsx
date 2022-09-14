import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Select from '../Select'
import { getYearOptions, weekDays, months as monthOptions } from '../../mocks/datepickerValues'
import { getDates } from '../../utils/datepicker'
import arrowRight from '../../assets/arrowRight.svg'
import arrowLeft from '../../assets/arrowLeft.svg'
import home from '../../assets/home.svg'

const DatePicker = () => {
  // Define start and stop years for Select options
  const startYear = 2000
  const stopYear = 2030
  const yearOptions = getYearOptions(startYear, stopYear)

  // Default month and year to populate the datepicker
  const initialMonthOption = { name: 'January', value: 0 }
  const initialYearOption = { name: '2022', value: 2022 }
  const initialDatesArray = getDates(initialYearOption.value, initialMonthOption.value)

  const [isDisplayed, setIsDisplayed] = useState(false)
  const [selectedMonthOption, setSelectedMonthOption] = useState(initialMonthOption)
  const [selectedYearOption, setSelectedYearOption] = useState(initialYearOption)
  const [dateRanges, setDateRanges] = useState(initialDatesArray)

  const isBoundary = {
    start: selectedYearOption.value === startYear & selectedMonthOption.value === 0,
    end: selectedYearOption.value === stopYear & selectedMonthOption.value === 11
  }

  function displayDatePicker () {
    setIsDisplayed(true)
  }

  function handleNavButtonClick (target) {
    const currentMonth = selectedMonthOption.value
    const currentYear = selectedYearOption.value
    let result
    if (target === 'prev') result = new Date(currentYear, currentMonth - 1)
    else if (target === 'next') result = new Date(currentYear, currentMonth + 1)
    else {
      const today = new Date()
      const todaysYear = today.getFullYear()
      const todaysMonth = today.getMonth()
      result = new Date(todaysYear, todaysMonth)
    }
    const newMonthOption = {
      name: `${result.getMonth()}`,
      value: result.getMonth()
    }
    const newYearOption = {
      name: `${result.getFullYear()}`,
      value: result.getFullYear()
    }
    setSelectedMonthOption(newMonthOption)
    setSelectedYearOption(newYearOption)
  }
  function handlePickDate (e) {
    console.log(e.target.value)
  }
  useEffect(() => {
    const newRange = getDates(selectedYearOption.value, selectedMonthOption.value)
    setDateRanges(newRange)
  }, [selectedMonthOption, selectedYearOption])

  return (
  <div className='date-picker'>
    <input type='text' onClick={displayDatePicker}></input>
    {isDisplayed &&
    <div className='date-picker-panel'>
      <div className='date-picker-options'>
        { !isBoundary.start && <button type='button' className='date-picker-options nav-prev' onClick={() => handleNavButtonClick('prev')}><img src={arrowLeft} alt='previous month'/></button>}
        <button type='button' className='date-picker-options nav-home' onClick={() => handleNavButtonClick('home')}><img src={home} alt='today'/></button>
        <Select options={monthOptions} selected={selectedMonthOption} setSelected={setSelectedMonthOption}/>
        <Select options={yearOptions} selected={selectedYearOption} setSelected={setSelectedYearOption}/>
        { !isBoundary.end && <button type='button' className='date-picker-options nav-next' onClick={() => handleNavButtonClick('next')}><img src={arrowRight} alt='next month'/></button>}
      </div>
      <div className='date-picker__weekdays'>
      {
        weekDays.map(weekDay => {
          return (
            <div className='cell week-day' key={`w${uuidv4()}`}>{weekDay}</div>
          )
        })
      }
      </div>
      <div className='date-picker__dates'>
        {
          dateRanges.previousMonth && dateRanges.previousMonth.map(date => {
            return <button type='button' className='cell date previous-month-date' value={date} onClick={(e) => handlePickDate(e)} key={`dp${uuidv4()}`} >{date.getDate()}</button>
          })
          }
        {
          dateRanges.currentMonth && dateRanges.currentMonth.map(date => {
            return <button type='button'className='cell date' value={date} onClick={(e) => handlePickDate(e)} key={`dc${uuidv4()}`}>{date.getDate()}</button>
          })
        }
        {
          dateRanges.nextMonth && dateRanges.nextMonth.map(date => {
            return <button type='button' className='cell date next-month-date' value={date} onClick={(e) => handlePickDate(e)} key={`dn${uuidv4()}`}>{date.getDate()}</button>
          })
        }
      </div>
    </div>}
  </div>
  )
}

export default DatePicker
