import React from 'react'
import PropTypes from 'prop-types'
import CaretUp from '../../assets/caretUp.svg'
import CaretDown from '../../assets/caretDown.svg'

const TableHeading = ({ category, setSortOption }) => {
  function handleSortBtnClick (sortDirection) {
    setSortOption({ category, sortDirection })
  }
  return (
    <div className='title-cell'>
      <div >{category}</div>
      <div className='sort-buttons'>
        <button className='sort-button asc' onClick={() => handleSortBtnClick('asc')}><img className='caret' src={CaretUp} alt='up'/></button>
        <button className='sort-button desc' onClick={() => handleSortBtnClick('desc')}><img className='caret' src={CaretDown} alt='down'/></button>
      </div>
    </div>
  )
}

TableHeading.propTypes = {
  category: PropTypes.string,
  setSortOption: PropTypes.func
}

export default TableHeading
