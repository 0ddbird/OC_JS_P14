import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Select from './Select'
import { getYearOptions, weekDays, months as monthOptions } from '../mocks/datepickerValues'
import { getDates } from '../utils/datepicker'
import arrowRight from '../assets/arrowRight.svg'
import arrowLeft from '../assets/arrowLeft.svg'
import home from '../assets/home.svg'

const DatePicker = () => {
  const initialMonthOption = { name: 'January', value: 0 }
  const initialYearOption = { name: '2022', value: 2022 }
  const initialDatesArray = getDates(initialYearOption.value, initialMonthOption.value)
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [selectedMonthOption, setSelectedMonthOption] = useState(initialMonthOption)
  const [selectedYearOption, setSelectedYearOption] = useState(initialYearOption)
  const [dateRanges, setDateRanges] = useState(initialDatesArray)
  const yearOptions = getYearOptions(1950, 2050)

  function displayDatePicker () {
    setIsDisplayed(true)
  }

  function handleNavButtonClick (target) {
    const currentMonth = selectedMonthOption.value
    const currentYear = selectedYearOption.value
    console.log(target)
    const currentMonthAndYear = new Date(currentYear, currentMonth)
    let result
    console.log(currentMonthAndYear)
    if (target === 'prev') {
      result = new Date(currentYear, currentMonth - 1)
    } else if (target === 'next') {
      result = new Date(currentYear, currentMonth + 1)
    } else {
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
    console.log(result)
    setSelectedMonthOption(newMonthOption)
    setSelectedYearOption(newYearOption)
  }

  useEffect(() => {
    const newRange = getDates(selectedYearOption.value, selectedMonthOption.value)
    console.log(newRange)
    setDateRanges(newRange)
  }, [selectedMonthOption, selectedYearOption])

  return (
  <div className='date-picker'>
    <input type='text' onClick={displayDatePicker}></input>
    {isDisplayed &&
    <div className='date-picker-panel'>
      <div className='date-picker-options'>
        <div className='date-picker-options nav-prev' onClick={() => handleNavButtonClick('prev')}><img src={arrowLeft} alt='previous month'/></div>
        <div className='date-picker-options nav-home' onClick={() => handleNavButtonClick('home')}><img src={home} alt='today'/></div>
        <Select options={monthOptions} selected={selectedMonthOption} setSelected={setSelectedMonthOption}/>
        <Select options={yearOptions} selected={selectedYearOption} setSelected={setSelectedYearOption}/>
        <div className='date-picker-options nav-next' onClick={() => handleNavButtonClick('next')}><img src={arrowRight} alt='next month'/></div>
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
            return <div className='cell date previous-month-date' key={`dp${uuidv4()}`}>{date.getDate()}</div>
          })
          }
        {
          dateRanges.currentMonth && dateRanges.currentMonth.map(date => {
            return <div className='cell date' key={`dc${uuidv4()}`}>{date.getDate()}</div>
          })
        }
        {
          dateRanges.nextMonth && dateRanges.nextMonth.map(date => {
            return <div className='cell date next-month-date' key={`dn${uuidv4()}`}>{date.getDate()}</div>
          })
        }
      </div>
    </div>}
  </div>
  )
}

export default DatePicker
