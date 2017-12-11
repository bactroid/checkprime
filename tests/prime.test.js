const {isPrime} = require('../src/prime')

test('7 should return true', () => {
  expect(isPrime(7)).toBe(true)
})

test('10 should return false', () => {
  expect(isPrime(10)).toBe(false)
})

test('983 should return true', () => {
  expect(isPrime(983)).toBe(true)
})

test('1000 should return false', () => {
  expect(isPrime(1000)).toBe(false)
})

test('4 should return false', () => {
  expect(isPrime(4)).toBe(false)
})

test('9 should return false', () => {
  expect(isPrime(9)).toBe(false)
})

test('2 should return true', () => {
  expect(isPrime(2)).toBe(true)
})

test('1 should return null', () => {
  expect(isPrime(1)).toBe(null)
})

test('0 should return null', () => {
  expect(isPrime(0)).toBe(null)
})

test('-1 should return null', () => {
  expect(isPrime(-1)).toBe(null)
})
