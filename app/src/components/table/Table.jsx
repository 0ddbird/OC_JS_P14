import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import TableLength from './TableLength'
import TableSearch from './TableSearch'
import TableNav from './TableNav'
import TableCount from './TableCount'
import TableHeading from './TableHeading'

const Table = ({ items }) => {
  const [tableItems, setTableItems] = useState(items)
  const [sortOption, setSortOptions] = useState({})

  // Compute the number of columns
  const categories = Object.keys(tableItems[0])
  const gridCols = `repeat(${categories.length}, 1fr)`

  function sortTableItems (currentItems, sortOptions) {
    if (sortOptions.sortDirection === 'desc') {
      const newItems = currentItems.sort((itemA, itemB) => itemA[`${sortOptions.category}`] > itemB[`${sortOptions.category}`] ? 1 : -1)
      setTableItems(newItems)
    } else {
      const newItems = currentItems.sort((itemA, itemB) => itemA[`${sortOptions.category}`] < itemB[`${sortOptions.category}`] ? 1 : -1)
      setTableItems(newItems)
    }
  }

  useEffect(() => {
    sortTableItems(tableItems, sortOption)
  }, [tableItems, sortOption])

  return (
  <div className='table'>
    <div className='table-top-options'>
      <TableLength />
      <TableSearch />
    </div>
    <div className='title_row' style={{ gridTemplateColumns: gridCols }}>
    {
      categories.map(category => { return <TableHeading key={uuidv4()} category={category} sortOption={sortOption} setSortOptions={setSortOptions}/> })
    }
    </div>
    {
      tableItems.map(item => {
        return (
          <div className='item_row' style={{ gridTemplateColumns: gridCols }} key={uuidv4()}>
            {
              Object.entries(item).map(entry => {
                return (
                  <div key={uuidv4()}>{entry[1]}</div>
                )
              })
            }
          </div>
        )
      })
    }
    <div className='table-bottom-options'>
      <TableCount />
      <TableNav />
    </div>
  </div>

  )
}

Table.propTypes = {
  items: PropTypes.array
}

export default Table
