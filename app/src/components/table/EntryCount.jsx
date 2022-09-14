import React from 'react'
import PropTypes from 'prop-types'

const EntryCount = ({ range, rangeStart, totalItems }) => {
  return (
  <div>
    Showing {`${rangeStart + 1}`} to { range < totalItems ? `${rangeStart + range}` : `${totalItems}`} of {`${totalItems}`} entries
  </div>)
}

EntryCount.propTypes = {
  range: PropTypes.number,
  rangeStart: PropTypes.number,
  totalItems: PropTypes.number
}
export default EntryCount
