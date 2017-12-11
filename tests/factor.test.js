const {getFactors} = require('../src/factor')

test('getFactors should return all factors of a number', () => {
  expect(getFactors(213)).toEqual([1, 3, 71, 213])
})
