#!/usr/bin/env node
const {isPrime} = require('../dist/prime')
const {getFactors} = require('../dist/factor')

if (process.argv.length !== 3) {
  console.error('Wrong!')
  process.exit()
}

if (isPrime(process.argv[2])) {
  console.log(process.argv[2] + ' is prime.')
} else {
  console.log(process.argv[2] + ' is not prime.')
  console.log(getFactors(process.argv[2]))
}
