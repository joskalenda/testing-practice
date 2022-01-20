const Calculator = {
  sum(i,j) { return i+j},
  sub(i,j) {return i-j},
  div(i,j) {
    if (j === 0){
      throw new Error(" can't be devided by 0");
    }
    return i/j;
  },
  mul(i,j) {return i*j},
};

module.exports = Calculator;