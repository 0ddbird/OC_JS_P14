import React from 'react'
import PropTypes from 'prop-types'

const TableHeading = ({ category, setSortOptions }) => {
  function handleSortBtnClick (sortDirection) {
    setSortOptions(
      {
        category,
        sortDirection
      }
    )
  }

  return (
    <div className='title-cell'>
      <div >{category}</div>
      <div className='sort-buttons'>
        <button className='sort-btn asc' onClick={() => handleSortBtnClick('asc')}>A</button>
        <button className='sort-btn desc' onClick={() => handleSortBtnClick('desc')}>Z</button>
      </div>
    </div>
  )
}

TableHeading.propTypes = {
  category: PropTypes.string,
  setSortOptions: PropTypes.func
}

export default TableHeading
