export const utilService = {
  makeId,
  getRandomIntInclusive,
  debounce,
  saveToStorage,
  loadFromStorage,
  getRandomTimestampLastMonth,
  getShortenName,
  getMonthFromTimestamp,
  getDateFromTimestamp,
  getFormattedCurrency,
  getFormattedRegex,
}

function makeId(length = 6) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function getRandomTimestampLastMonth() {
  const now = new Date()
  const past = new Date()
  past.setMonth(now.getMonth() - 1)

  const randomTime = new Date(past.getTime() + Math.random() * (now.getTime() - past.getTime()))
  return randomTime.getTime()
}

function getShortenName(name) {
  const names = name.split(' ')
  const [firstName, lastName] = names
  return `${firstName} ${lastName.charAt(0)}.`
}

function getMonthFromTimestamp(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleString('default', { month: 'short' })
}

function getDateFromTimestamp(timestamp) {
  const date = new Date(timestamp)
  return date.getDate()
}

function getFormattedCurrency(amount) {
  const IsraelShekels = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'ILS' })
  return IsraelShekels.format(amount)
}

function getFormattedRegex(str) {
  return str.replace(/[.*+?^${}(|[\]\\]/g, '\\$&')
}
