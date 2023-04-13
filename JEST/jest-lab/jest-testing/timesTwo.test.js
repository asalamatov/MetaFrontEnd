const timesTwo = require(`./timesTwo`);

// first test
test('returns 2 times the number', () => {
    expect(timesTwo(10)).toBe(20);
}) 