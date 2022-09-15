// eslint-disable-next-line no-extend-native
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}
// eslint-disable-next-line no-extend-native
Date.prototype.substractDays = function (days) {
  const date = new Date(this.valueOf())
  date.setDate(date.getDate() - days)
  return date
}

function getCurrentMonthDays (startDate, stopDate) {
  const dateArray = []
  let currentStartDate = startDate

  while (currentStartDate <= stopDate) {
    dateArray.push(new Date(currentStartDate))
    currentStartDate = currentStartDate.addDays(1)
  }
  return dateArray
}

function fillDaysFromPreviousMonth (startDate) {
  const dateArray = []
  let currentStartDate = startDate.substractDays(1)

  for (let i = currentStartDate.getDay(); i >= 0; i--) {
    dateArray.push(new Date(currentStartDate))
    if (new Date(currentStartDate).getDay() === 0) {
      dateArray.reverse()
      break
    }
    currentStartDate = currentStartDate.substractDays(1)
  }
  return dateArray
}

function fillDaysFromNextMonth (stopDate) {
  const dateArray = []
  let currentStopDate = stopDate

  for (let i = currentStopDate.getDay(); i !== 6; i++) {
    dateArray.push(new Date(currentStopDate))
    currentStopDate = currentStopDate.addDays(1)
  }
  return dateArray
}

function getDates (year, month) {
  // Months are indexed from 0
  let previousMonthDays, nextMonthDays

  const startDate = new Date(year, month, 1)
  const stopDate = new Date(year, month + 1, 0)
  if (startDate.getDay() !== 0) previousMonthDays = fillDaysFromPreviousMonth(startDate, stopDate)
  const currentMonthDays = getCurrentMonthDays(startDate, stopDate)
  if (stopDate.getDay() !== 6) nextMonthDays = fillDaysFromNextMonth(stopDate)

  const result = {
    previousMonth: previousMonthDays,
    currentMonth: currentMonthDays,
    nextMonth: nextMonthDays
  }

  return result
}

export { getDates }
