import React from 'react'
import PropTypes from 'prop-types'
import arrowRight from '../../assets/arrowRight.svg'
import arrowLeft from '../../assets/arrowLeft.svg'

const NavMonthButton = ({ direction, boundaries, selectedMonthOption, selectedYearOption, setSelectedMonthOption, setSelectedYearOption }) => {
  function handleNavButtonClick (target) {
    const currentMonth = selectedMonthOption.value
    const currentYear = selectedYearOption.value
    let result
    if (target === 'prev') result = new Date(currentYear, currentMonth - 1)
    else result = new Date(currentYear, currentMonth + 1)

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

  if (direction === 'next' && !boundaries.end) return <button type='button' className='datepicker-options date-nav' onClick={() => handleNavButtonClick('next')}><img src={arrowRight} alt='next month'/></button>
  if (direction === 'previous' && !boundaries.start) return <button type='button' className='datepicker-options date-nav' onClick={() => handleNavButtonClick('prev')}><img src={arrowLeft} alt='previous month'/></button>
}

NavMonthButton.propTypes = {
  direction: PropTypes.string,
  boundaries: PropTypes.object,
  selectedMonthOption: PropTypes.object,
  selectedYearOption: PropTypes.object,
  setSelectedMonthOption: PropTypes.func,
  setSelectedYearOption: PropTypes.func
}

export default NavMonthButton
