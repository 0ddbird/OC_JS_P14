import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Select from '../Select'
import { getYearOptions, weekDays, months as monthOptions } from '../../mocks/datepickerValues'
import { getDates } from '../../utils/datepicker'
import NavMonthButton from './NavMonthButton'
import HomeButton from './HomeButton'
import DisplayedDates from './DisplayedDates'
import PropTypes from 'prop-types'

const DatePicker = ({ startYear, stopYear, defaultYear, defaultMonth }) => {
  // Define start and stop years for Select options
  const yearOptions = getYearOptions(startYear, stopYear)

  const initialDatesArray = getDates(defaultYear.value, defaultMonth.value)

  const [isDatePickerOpen, setDatePickerOpen] = useState(false)
  const [selectedMonthOption, setSelectedMonthOption] = useState(defaultMonth)
  const [selectedYearOption, setSelectedYearOption] = useState(defaultYear)
  const [dateRanges, setDateRanges] = useState(initialDatesArray)
  const [selectedDate, setSelectedDate] = useState('')

  const isBoundary = {
    start: selectedYearOption.value === startYear & selectedMonthOption.value === 0,
    end: selectedYearOption.value === stopYear & selectedMonthOption.value === 11
  }

  useEffect(() => {
    const newRange = getDates(selectedYearOption.value, selectedMonthOption.value)
    setDateRanges(newRange)
  }, [selectedMonthOption, selectedYearOption])

  return (
    <div className='date-picker'>
      <input type='text' readOnly onClick={() => setDatePickerOpen(true)} value={selectedDate.name}></input>
      {isDatePickerOpen &&
      <div className='date-picker-panel'>
        <div className='date-picker-options'>
          <NavMonthButton direction={'previous'} boundaries={isBoundary} selectedMonthOption={selectedMonthOption} selectedYearOption={selectedYearOption} setSelectedMonthOption={setSelectedMonthOption} setSelectedYearOption={setSelectedYearOption}/>
          <HomeButton setSelectedMonthOption={setSelectedMonthOption} setSelectedYearOption={setSelectedYearOption}/>
          <Select options={monthOptions} selected={selectedMonthOption} setSelected={setSelectedMonthOption}/>
          <Select options={yearOptions} selected={selectedYearOption} setSelected={setSelectedYearOption}/>
          <NavMonthButton direction={'next'} boundaries={isBoundary} selectedMonthOption={selectedMonthOption} selectedYearOption={selectedYearOption} setSelectedMonthOption={setSelectedMonthOption} setSelectedYearOption={setSelectedYearOption}/>
        </div>
        <div className='date-picker__weekdays'>
          {weekDays.map(weekDay => { return <div className='cell week-day' key={`w${uuidv4()}`}>{weekDay}</div> })}
        </div>
        <DisplayedDates datesInRange={dateRanges} setSelectedDate={setSelectedDate} setDatePickerOpen={setDatePickerOpen}/>
      </div>}
    </div>
  )
}

DatePicker.propTypes = {
  startYear: PropTypes.number,
  stopYear: PropTypes.number,
  defaultYear: PropTypes.object,
  defaultMonth: PropTypes.object
}

export default DatePicker
