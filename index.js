const prime = require('./src/prime')
const factor = require('./src/factor')

module.exports = {
  isPrime: prime.isPrime,
  getFactors: factor.getFactors
}
