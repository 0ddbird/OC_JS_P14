import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const Select = ({ options, setSelectOption }) => {
  function handleSelectChange (e) {
    setSelectOption(e.target.value)
  }
  return (
    <select onChange={(e) => handleSelectChange(e)}>
      {
        options.map(option => {
          return (
            <option key={uuidv4()} value={option.value}>{option.name}</option>
          )
        })
      }
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.array,
  setSelectOption: PropTypes.func

}

export default Select
