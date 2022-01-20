const CheckLength = (s) => {
  if (s.length >= 1 && s.length <= 10) {
    return s.length;
  }
  throw new Error('String does not match requirements');
};

module.exports = CheckLength;