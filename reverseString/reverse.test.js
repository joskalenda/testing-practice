const toReverse = require('./reverse');

it('String is reversed', () => {
  expect(toReverse('kalenda')).toBe('adnelak');
});