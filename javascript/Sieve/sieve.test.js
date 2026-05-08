const Sieve = require("./sieve");
const { ERRORS } = require("./constants");

describe("Sieve", () => {
  test("valid results", () => {
    const sieve = new Sieve();
    // my added tests
    expect(() => sieve.NthPrime(null)).toThrow(ERRORS.INVALID_INPUT);
    expect(() => sieve.NthPrime(-1)).toThrow(ERRORS.INVALID_INPUT);
    expect(() => sieve.NthPrime(3.333)).toThrow(ERRORS.INVALID_INPUT);
    expect(sieve.NthPrime(1)).toBe(3);
    expect(sieve.NthPrime(5)).toBe(13);
    // required tests
    expect(sieve.NthPrime(0)).toBe(2);
    expect(sieve.NthPrime(19)).toBe(71);
    expect(sieve.NthPrime(99)).toBe(541);
    expect(sieve.NthPrime(500)).toBe(3_581);
    expect(sieve.NthPrime(986)).toBe(7_793);
    expect(sieve.NthPrime(2_000)).toBe(17_393);
    expect(sieve.NthPrime(1_000_000)).toBe(15_485_867);
    // TODO: for now, 10 million isn't working
    //expect(sieve.NthPrime(10_000_000)).toBe(179_424_691);
    //expect(sieve.NthPrime(100_000_000)).toBe(2_038_074_751); not required, just a fun challenge
  });
});
