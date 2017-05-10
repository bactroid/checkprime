# checkprime

A simple CLI utility to check whether a number is prime.

I have a weird mental quirk wherein I think of numbers at odd times and I feel compelled to determine whether those numbers are prime. It's handy for me to have a command-line utility to answer these questions quickly and easily so that I can get back to my actual work.

## Installation

This utility can be installed via `npm`:

`npm install checkprime`

I recommend installing the package globally for convenience.

## Usage

`checkprime integer`

This will check whether the supplied integer is prime. If it's a composite number, all factors will be displayed.

## Supplied Functions

If installed to a project as a module, the following functions are provided:

### `getFactors(num)`

Returns an array of all factors for a given integer.

### `isPrime(num)`

Returns true if the number is prime and false if the number is composite.
