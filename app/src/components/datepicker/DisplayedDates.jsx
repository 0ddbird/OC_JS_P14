import React from 'react'
import PropTypes from 'prop-types'
import DateButton from './DateButton'
import { v4 as uuidv4 } from 'uuid'

const DisplayedDates = ({ datesInRange, setSelectedDate, setDatePickerOpen }) => {
  function createDateButton (date, month) {
    const today = new Date()
    const simplifiedTodaysDate = new Date(`${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`)
    const simplifiedCurrentDate = new Date(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
    if (simplifiedCurrentDate.getTime() === simplifiedTodaysDate.getTime()) {
      return <DateButton date={date} key={`dp${uuidv4()}`} month={month} isToday={true} setSelectedDate={setSelectedDate} setDatePickerOpen={setDatePickerOpen}/>
    } else {
      return <DateButton date={date} key={`dp${uuidv4()}`} month={month} isToday={false} setSelectedDate={setSelectedDate} setDatePickerOpen={setDatePickerOpen}/>
    }
  }
  const datesFromPreviousMonth = datesInRange.previousMonth
  const datesFromNextMonth = datesInRange.nextMonth

  return (
    <div className='date-picker__dates'>
      { datesFromPreviousMonth && datesInRange.previousMonth.map(date => { return createDateButton(date, 'previous') })}
      { datesInRange.currentMonth.map(date => { return createDateButton(date, 'current') })}
      { datesFromNextMonth && datesInRange.nextMonth.map(date => { return createDateButton(date, 'next') })}
    </div>

  )
}

DisplayedDates.propTypes = {
  datesInRange: PropTypes.object,
  setSelectedDate: PropTypes.func,
  setDatePickerOpen: PropTypes.func
}
export default DisplayedDates
