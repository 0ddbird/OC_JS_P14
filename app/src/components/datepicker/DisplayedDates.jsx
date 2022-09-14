import React from 'react'
import PropTypes from 'prop-types'
import DateButton from './DateButton'
import { v4 as uuidv4 } from 'uuid'

const DisplayedDates = ({ datesInRange, setSelectedDate, setDatePickerOpen }) => {
  return (
    <div className='date-picker__dates'>
        {
          datesInRange.previousMonth && datesInRange.previousMonth.map(date => {
            return <DateButton date={date} key={`dp${uuidv4()}`} month={'previous'} setSelectedDate={setSelectedDate} setDatePickerOpen={setDatePickerOpen}/>
          })
          }
        {
          datesInRange.currentMonth && datesInRange.currentMonth.map(date => {
            return <DateButton date={date} key={`dc${uuidv4()}`} month={'current'} setSelectedDate={setSelectedDate} setDatePickerOpen={setDatePickerOpen}/>
          })
        }
        {
          datesInRange.nextMonth && datesInRange.nextMonth.map(date => {
            return <DateButton date={date} key={`dc${uuidv4()}`} month={'next'} setSelectedDate={setSelectedDate} setDatePickerOpen={setDatePickerOpen}/>
          })
        }
      </div>

  )
}

DisplayedDates.propTypes = {
  datesInRange: PropTypes.object,
  setSelectedDate: PropTypes.func,
  setDatePickerOpen: PropTypes.func
}
export default DisplayedDates
