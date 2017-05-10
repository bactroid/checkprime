const {range} = require('lodash')
const isFactor = num => (factor, index, array) => num % factor === 0

const isPrime = num => {
  const isNumFactor = isFactor(num)
  return !range(2, Math.sqrt(num))
    .some(isNumFactor)
}

module.exports = {
  isPrime
}
