const {test} = require('tape')
const {getFactors} = require('./factor')

test('getFactors', assert => {
  const expected = [1, 3, 71, 213]
  const actual = getFactors(213)
  assert.deepEqual(actual, expected, 'getFactors should return all factors of a number')
  assert.end()
})
