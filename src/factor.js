const {range} = require('lodash')

const isFactor = (num, factor) => num % factor === 0

const getFactors = num =>
  range(1, num + 1).filter(x => isFactor(num, x))

module.exports = {
  getFactors
}
