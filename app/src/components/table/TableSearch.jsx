import React from 'react'
import PropTypes from 'prop-types'
const TableSearch = ({ setSearchKeyword }) => {
  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value)
  }
  return <div className='table-search'><input type="text" onChange={(e) => handleInputChange(e)}></input></div>
}

TableSearch.propTypes = {
  setSearchKeyword: PropTypes.func
}

export default TableSearch
