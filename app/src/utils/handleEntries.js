function sortEntries (sortOption, batch) {
  const direction = sortOption.sortDirection
  let sortedBatch = batch

  if (direction === 'desc') {
    sortedBatch = sortedBatch.sort(
      (itemA, itemB) => {
        if (itemA[`${sortOption.category}`] > itemB[`${sortOption.category}`]) return -1
        if (itemA[`${sortOption.category}`] < itemB[`${sortOption.category}`]) return 1
        return 0
      }
    )
  } else if (direction === 'asc') {
    sortedBatch = sortedBatch.sort(
      (itemA, itemB) => {
        if (itemA[`${sortOption.category}`] < itemB[`${sortOption.category}`]) return -1
        if (itemA[`${sortOption.category}`] > itemB[`${sortOption.category}`]) return 1
        return 0
      })
  }
  return sortedBatch
}

function selectEntries (entries, range, rangeStart) {
  const entriesInRange = []
  let firstItemIndex = range * rangeStart
  let lastItemIndex = range * (rangeStart + 1)
  if (firstItemIndex < 0) firstItemIndex = 0
  if (lastItemIndex > entries.length) lastItemIndex = entries.length
  for (let i = firstItemIndex; i < lastItemIndex; i++) entriesInRange.push(entries[i])
  return entriesInRange
}

export { sortEntries, selectEntries }
