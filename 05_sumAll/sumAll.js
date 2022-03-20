const sumAll = function (min, max) {
  let sum = 0;
  if (min === +min && max === +max && min >= 0 && max >= 0) {
    if (min <= max) {
      for (let i = min; i <= max; i++) {
        sum += i;
      }
    }
    if (min >= max) {
      for (i = min; i >= max; i--) {
        sum += i;
      }
    }
  } else {
    sum = "ERROR";
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
