import React from 'react'
import PropTypes from 'prop-types'
import home from '../../assets/home.svg'

const HomeButton = ({ setSelectedMonthOption, setSelectedYearOption }) => {
  function handleNavButtonClick () {
    const today = new Date()
    const todaysYear = today.getFullYear()
    const todaysMonth = today.getMonth()
    const result = new Date(todaysYear, todaysMonth)

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

  return <button type='button' className='date-picker-options date-nav' onClick={() => handleNavButtonClick('home')}><img src={home} alt='today'/></button>
}

HomeButton.propTypes = {
  setSelectedMonthOption: PropTypes.func,
  setSelectedYearOption: PropTypes.func
}
export default HomeButton
