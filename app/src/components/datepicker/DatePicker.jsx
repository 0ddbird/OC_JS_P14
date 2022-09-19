import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

// Components
import Select from '../Select'
import DisplayedDates from './DisplayedDates'
import NavMonthButton from './NavMonthButton'
import HomeButton from './HomeButton'
// Utils
import { getDates } from './datepickerUtils'
import ChildrenBlur from '../ChildrenBlur'

const DatePicker = ({ startYear, stopYear, defaultYear, defaultMonth, selectedDate, setSelectedDate }) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthOptions = [
    { name: 'January', value: 0 },
    { name: 'February', value: 1 },
    { name: 'March', value: 2 },
    { name: 'April', value: 3 },
    { name: 'May', value: 4 },
    { name: 'June', value: 5 },
    { name: 'July', value: 6 },
    { name: 'August', value: 7 },
    { name: 'September', value: 8 },
    { name: 'October', value: 9 },
    { name: 'November', value: 10 },
    { name: 'December', value: 11 }
  ]
  function getYearOptions (startYear, stopYear) {
    const yearRange = []
    for (let i = startYear; i <= stopYear; i++) yearRange.push({ name: `${i}`, value: i })
    return yearRange
  }
  const yearOptions = getYearOptions(startYear, stopYear)
  const initialDatesArray = getDates(defaultYear.value, defaultMonth.value)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [selectedMonthOption, setSelectedMonthOption] = useState(defaultMonth)
  const [selectedYearOption, setSelectedYearOption] = useState(defaultYear)
  const [dateRanges, setDateRanges] = useState(initialDatesArray)
  const isBoundary = {
    start: selectedYearOption.value === startYear & selectedMonthOption.value === 0,
    end: selectedYearOption.value === stopYear & selectedMonthOption.value === 11
  }

  const formatedDate = (date) => {
    const formatedDate = `${date.getDate()}`.length < 2 ? `0${date.getDate()}` : `${date.getDate()}`
    const formatedYear = `${date.getFullYear()}`
    const formatedMonth = `${date.getMonth() + 1}`.length < 2 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
    return `${formatedDate}/${formatedMonth}/${formatedYear}`
  }

  useEffect(() => {
    const newRange = getDates(selectedYearOption.value, selectedMonthOption.value)
    setDateRanges(newRange)
  }, [selectedMonthOption, selectedYearOption])

  return (
    <ChildrenBlur
    onBlur={() => setIsDatePickerOpen(false)}
    onFocus={() => setIsDatePickerOpen(true)}
    className={`group${isDatePickerOpen ? '--focused' : ''}`}
    >
      <div className='datepicker'>
        <input className='datepicker-input' type='text' readOnly value={`${formatedDate(selectedDate.value)}`} onClick={() => setIsDatePickerOpen(true)}></input>
            <div className={`datepicker-panel${isDatePickerOpen ? '--focused' : ''}`} tabIndex='0'>
              <div className='datepicker-options'>
                <NavMonthButton
                direction={'previous'}
                boundaries={isBoundary}
                selectedMonthOption={selectedMonthOption}
                selectedYearOption={selectedYearOption}
                setSelectedMonthOption={setSelectedMonthOption}
                setSelectedYearOption={setSelectedYearOption}/>
                <HomeButton
                setSelectedMonthOption={setSelectedMonthOption}
                setSelectedYearOption={setSelectedYearOption}/>
                <Select
                options={monthOptions}
                selected={selectedMonthOption}
                setSelected={setSelectedMonthOption}/>
                <Select
                options={yearOptions}
                selected={selectedYearOption}
                setSelected={setSelectedYearOption}/>
                <NavMonthButton
                direction={'next'}
                boundaries={isBoundary}
                selectedMonthOption={selectedMonthOption}
                selectedYearOption={selectedYearOption}
                setSelectedMonthOption={setSelectedMonthOption}
                setSelectedYearOption={setSelectedYearOption}/>
              </div>
              <div className='datepicker-weekdays'>
                {weekDays.map(weekDay => { return <div className='cell week-day' key={`w${uuidv4()}`}>{weekDay}</div> })}
              </div>
              <DisplayedDates
              datesInRange={dateRanges}
              setSelectedDate={setSelectedDate}
              setDatePickerOpen={setIsDatePickerOpen}/>
            </div>
      </div>
    </ChildrenBlur>
  )
}

DatePicker.propTypes = {
  startYear: PropTypes.number,
  stopYear: PropTypes.number,
  defaultYear: PropTypes.object,
  defaultMonth: PropTypes.object,
  selectedDate: PropTypes.object,
  setSelectedDate: PropTypes.func
}

export default DatePicker
