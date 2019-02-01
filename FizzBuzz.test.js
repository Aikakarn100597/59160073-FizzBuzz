const FizzBuzz = require('./FizzBuzz');

test('input 3 return Fizz', () => {
    expect(FizzBuzz(3)).toBe("Fizz");
});

test('input 5 return Buzz', () => {
    expect(FizzBuzz(5)).toBe("Buzz");
});

test('input 1 return 1', () => {
    expect(FizzBuzz(1)).toBe(1);
});

test('input 30 return FizzBuzz', () => {
    expect(FizzBuzz(30)).toBe("FizzBuzz");
});

test('input 64 return 64', () => {
    expect(FizzBuzz(64)).toBe(64);
});

test('input 100 return 100', () => {
    expect(FizzBuzz(100)).toBe("Buzz");
});

test('input 105 return FizzBuzz', () => {
    expect(FizzBuzz(105)).toBe("FizzBuzz");
});