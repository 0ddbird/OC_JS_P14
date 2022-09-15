import React from 'react'
import PropTypes from 'prop-types'
// Assets
import CaretUp from '../../assets/caretUp.svg'
import CaretDown from '../../assets/caretDown.svg'

const TableHeading = ({ category, setSortOption }) => {
  function handleSortBtnClick (sortDirection) {
    const value = category.value
    setSortOption({ category: value, sortDirection })
  }
  return (
    <div className='table-header-cell'>
      <div>{category.name}</div>
      <div className='sort-buttons'>
        <button className='sort-button asc' onClick={() => handleSortBtnClick('asc')}><img className='caret' src={CaretUp} alt='up'/></button>
        <button className='sort-button desc' onClick={() => handleSortBtnClick('desc')}><img className='caret' src={CaretDown} alt='down'/></button>
      </div>
    </div>
  )
}

TableHeading.propTypes = {
  category: PropTypes.object,
  setSortOption: PropTypes.func
}

export default TableHeading
