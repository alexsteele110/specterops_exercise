const { ERRORS } = require("./constants");

class Sieve {
  NthPrime(n) {
    // validate input
    if (!Number.isInteger(n) || n < 0) {
      throw new Error(ERRORS.INVALID_INPUT);
    }

    // handle base case
    if (n === 0) return 2;

    // use prime number theorem to estimate size of array we need
    const estimate = Math.round(n * (Math.log(n) + Math.log(Math.log(n))));
    // noticed estimate breaks for small N, add a minimum number
    // divide by two to eliminate all even numbers for optimization
    const upperBound = Math.max(15, Math.round(estimate / 2));
    const primes = new Uint8Array(upperBound).fill(true);

    for (let i = 0; i < upperBound; i++) {
      if (primes[i]) {
        // since array only represents odds now, have to do some math to get
        // what true value the index means
        const indexVal = 2 * i + 3;
        for (let j = (indexVal * indexVal - 3) / 2; j < upperBound - 1; j += indexVal) {
          primes[j] = false;
        }
      }
    }

    let count = 0;
    for (let i = 0; i < primes.length; i++) {
      if (primes[i]) {
        count++;
      }
      if (count === n) {
        return 2 * i + 3;
      }
    }

    // if we reach here, something went wrong
    throw new Error(ERRORS.GENERIC);
  }
}

module.exports = Sieve;
