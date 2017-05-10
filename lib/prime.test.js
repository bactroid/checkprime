const {test} = require('tape')
const {isPrime} = require('./prime')

test('isPrime', assert => {
  assert.equal(isPrime(7), true, '7 should return true')
  assert.equal(isPrime(10), false, '10 should return false')
  assert.equal(isPrime(983), true, '983 should return true')
  assert.equal(isPrime(1000), false, '1000 should return false')
  assert.end()
})
