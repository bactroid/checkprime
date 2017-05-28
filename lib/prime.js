const {range} = require('lodash')
const isFactor = num => (factor, index, array) => num % factor === 0
const isPrime = num => !range(2, Math.sqrt(num)).some(isFactor(num))

module.exports = {
  isPrime
}
