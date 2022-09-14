const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = [
  { name: 'January', value: 0 },
  { name: 'February', value: 1 },
  { name: 'March', value: 2 },
  { name: 'April', value: 3 },
  { name: 'May', value: 4 },
  { name: 'June', value: 5 },
  { name: 'July', value: 6 },
  { name: 'August', value: 7 },
  { name: 'September', value: 8 },
  { name: 'October', value: 9 },
  { name: 'November', value: 10 },
  { name: 'December', value: 11 }
]

function getYearOptions (startYear, stopYear) {
  const yearRange = []
  for (let i = startYear; i < stopYear; i++) yearRange.push({ name: `${i}`, value: i })
  return yearRange
}

export { getYearOptions, weekDays, months }
