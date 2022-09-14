import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import Select from '../Select'
import TableSearch from './TableSearch'
import PageNavigation from './PageNavigation'
import EntryCount from './EntryCount'
import TableHeading from './TableHeading'
import { sortEntries } from '../../utils/handleEntries'
import { rangeOptions } from '../../mocks/entries'

const Table = ({ items, options }) => {
  if (!items) return <div>No data available</div>

  const [range, setRange] = useState(
    {
      name: '10',
      value: 10
    }
  )
  const [rangeStart, setRangeStart] = useState(0)
  const [currentBatch, setCurrentBatch] = useState(items)
  const [sortOption, setSortOption] = useState(undefined)
  const [searchKeyword, setSearchKeyword] = useState(undefined)
  const tableParams = { range, rangeStart, sortOption, searchKeyword }
  const categories = Object.keys(items[0])
  const gridColumns = `repeat(${categories.length}, 1fr)`

  function searchByKeyword (items, keyword) {
    const result = []
    items.forEach(item => { if (Object.values(item).toString().toLowerCase().includes(keyword)) result.push(item) })
    return result
  }

  function selectEntriesInRange (entries, range, rangeStart) {
    const result = []
    if (range > entries.length) range = entries.length
    for (let i = rangeStart; i < rangeStart + range; i++) if (entries[i]) result.push(entries[i])

    return result
  }

  function processBatch (items, tableParams) {
    let result = items
    const keyword = tableParams.searchKeyword
    const range = tableParams.range.value
    const rangeStart = tableParams.rangeStart
    const sortOption = tableParams.sortOption

    if (keyword) {
      result = searchByKeyword(items, keyword)
      if (result.length === 0) return result
    }

    result = selectEntriesInRange(result, range, rangeStart)
    if (sortOption) result = sortEntries(sortOption, result)
    return result
  }

  useEffect(() => {
    const currentBatch = processBatch(items, tableParams)
    setCurrentBatch(currentBatch)
  }, [sortOption, range, rangeStart, searchKeyword])

  return (
    <div className='table'>
      <div className='table-top-options'>
        { options.paginationModule &&
          <div className='table-length'>
            Show <Select options={rangeOptions} selected={range} setSelected={setRange}/> entries
          </div>

          }
        { options.searchModule && <TableSearch setSearchKeyword={setSearchKeyword}/>}
      </div>
      <div className='title_row' style={{ gridTemplateColumns: gridColumns }}>
      {
        categories.map(category => { return <TableHeading key={uuidv4()} category={category} sortOption={sortOption} setSortOption={setSortOption}/> })
      }
      </div>
      {
        currentBatch.map(item => {
          return (
            <div className='item_row' style={{ gridTemplateColumns: gridColumns }} key={uuidv4()}>
              { Object.entries(item).map(entry => { return <div key={uuidv4()}>{entry[1]}</div> }) }
            </div>
          )
        })
      }
      <div className='table-bottom-options'>
        { options.countModule && <EntryCount rangeStart={rangeStart} range={currentBatch.length} totalItems={items.length}/> }
        { options.navigationModule && <PageNavigation items={items} rangeStart={rangeStart} range={range.value} setRangeStart={setRangeStart}/> }
      </div>
    </div>
  )
}

Table.propTypes = {
  items: PropTypes.array,
  options: PropTypes.object
}

export default Table
