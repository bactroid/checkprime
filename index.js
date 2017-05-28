const prime = require('./dist/prime')
const factor = require('./dist/factor')

module.exports = {
  isPrime: prime.isPrime,
  getFactors: factor.getFactors
}
