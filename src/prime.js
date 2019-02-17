const range = require('@ramda/range')
const isFactor = num => (factor, index, array) => num % factor === 0
const isInvalid = num => num < 2

const isPrime = num => {
  if (isInvalid(num)) {
    return null
  } else if (num === 2) {
    return true
  } else {
    return !range(2, Math.sqrt(num) + 1).some(isFactor(num))
  }
}

module.exports = {
  isPrime
}
