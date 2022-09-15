import React from 'react'
import PropTypes from 'prop-types'

const DateButton = ({ date, month, setSelectedDate, setDatePickerOpen }) => {
  function formatDateValue (dateString) {
    const date = new Date(dateString)
    return {
      name: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      value: new Date(date.getFullYear(), date.getMonth(), date.getDate())
    }
  }
  function handleDatePick (e) {
    const pickedDate = formatDateValue(e.target.value)
    setSelectedDate(pickedDate)
    setDatePickerOpen(false)
  }

  const className = `cell date ${month}-month-date`
  return <button
  type='button'
  className= {className}
  value={date}
  onClick={(e) => handleDatePick(e)}>
  {date.getDate()}
  </button>
}

DateButton.propTypes = {
  date: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
  setDatePickerOpen: PropTypes.func,
  month: PropTypes.string
}

export default DateButton
