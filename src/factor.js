const {range} = require('lodash')

const isFactor = (num, factor) => num % factor === 0

const getFactors = num => {
  let factors = []
  range(1, num + 1)
    .forEach(x => {
      if (isFactor(num, x)) {
        factors.push(x)
      }
    })
  return factors
}

module.exports = {
  getFactors
}
