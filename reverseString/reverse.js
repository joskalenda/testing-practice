const toReverse = (s) => {
  let str = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    str += s[i];
  }
  return str;
};

module.exports = toReverse;