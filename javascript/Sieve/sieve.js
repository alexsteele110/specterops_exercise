class Sieve {
  NthPrime(n) {
    // handle base cases
    if (n === 0) return 2;
    if (n === 1) return 3;

    // use prime number theorem to estimate size of array we need
    const estimate = Math.round(n * (Math.log(n) + Math.log(Math.log(n))));
    // noticed estimate breaks for small N, add a minimum number
    const upperBound = Math.max(15, estimate);
    const primes = new Array(upperBound).fill(true);

    for (let i = 2; i <= upperBound; i++) {
      // checking if actual 'true' here to be explicit for now
      if (primes[i] === true) {
        for (let j = 2 * i; j < upperBound; j += i) {
          primes[j] = false;
        }
      }
    }

    let count = 0;
    for (let i = 2; i < primes.length; i++) {
      if (primes[i] === true) {
        count++;
      }
      if (count === n + 1) {
        return i;
      }
    }

    // if we reach here, something went wrong
    // TODO: update this message
    throw new Error("something went wrong...");
  }
}

module.exports = Sieve;
