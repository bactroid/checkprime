const prime = require('./dist/prime')
const isPrime = prime.isPrime
const factor = require('./dist/factor')
const getFactors = factor.getFactors

module.exports = {
  isPrime,
  getFactors
}
