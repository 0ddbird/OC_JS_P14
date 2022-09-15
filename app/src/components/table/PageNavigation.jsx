import React from 'react'
import PropTypes from 'prop-types'

const PageNavigation = ({ items, range, rangeStart, setRangeStart }) => {
  function handleClick (direction) {
    if (direction === 'next') setRangeStart(rangeStart + range)
    else setRangeStart(rangeStart - range)
  }

  return (
    <div>
      { rangeStart > 0 && <button onClick={() => handleClick('previous')}>Previous</button>}
      <span>{rangeStart / range + 1}</span>
      { rangeStart + range < items.length && <button onClick={() => handleClick('next')}>Next</button>}
    </div>
  )
}

PageNavigation.propTypes = {
  items: PropTypes.array,
  rangeStart: PropTypes.number,
  range: PropTypes.number,
  setRangeStart: PropTypes.func
}
export default PageNavigation
