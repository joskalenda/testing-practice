const Calculator = require('./calculator');

describe('Calulation result', () => {
  it('summing math', () => {
    expect(Calculator.sum(2, 2)).toBe(4);
  });
  it('substracting math', () => {
    expect(Calculator.sub(2, 2)).toBe(0);
  });
  it('dividing math', () => {
    expect(Calculator.div(4, 2)).toBe(2);
  });
  it('multiplying math', () => {
    expect(Calculator.mul(2, 2)).toBe(4);
  });
});