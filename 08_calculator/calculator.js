const add = function(num1,num2, ...num) {
	let added = num1 + num2 + num;
  return +added;
};

const subtract = function(num1,num2) {
	return sub = num1 - num2;
};

const sum = function(...args) {
  let array = args[0];
  let result = 0;
  for(let i = 0; i<array.length; i++){
    result+=array[i];
  }
  return result;
};

const multiply = function(...args) {
  let array = args[0];
  let result = 1;
  for(let i = 0; i<array.length; i++){
    result*=array[i];
  }
  return result;};

const power = function(num, pow) {
  let result = num;
  for(let i = 0; i<pow-1; i++){
    result*= num;
  }
  return result;
};

const factorial = function(num) {
	let result = 1
  let i = 1
  while(i<=num){
    result*=i;
    i++;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
