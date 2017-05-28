const {range} = require('lodash')
const isFactor = num => (factor, index, array) => num % factor === 0
const isInvalid = num => num < 2
const isPrime = num =>
  isInvalid(num)
    ? null
    : num === 2
      ? true
      : !range(2, Math.sqrt(num) + 1).some(isFactor(num))

module.exports = {
  isPrime
}
