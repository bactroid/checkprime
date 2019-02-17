#!/usr/bin/env node
const { isPrime } = require('../dist/prime')
const { getFactors } = require('../dist/factor')

if (process.argv.length !== 3) {
  console.error('Wrong!')
  process.exit()
}

const num = parseFloat(process.argv[2])
const result = isPrime(num)

if (result) {
  console.log(num + ' is prime.')
} else if (result === null) {
  console.log(num + ' is neither prime nor composite. ')
} else {
  console.log(num + ' is composite.')
  console.log(getFactors(num))
}
