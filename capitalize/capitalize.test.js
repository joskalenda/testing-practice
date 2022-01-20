const Capitalletter = require('./capitallize');
it('First letter is capitalized', () => {
  expect(Capitalletter('kalenda')).toBe('Kalenda')
});
