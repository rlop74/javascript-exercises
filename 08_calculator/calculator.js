const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(values) {
  let sum = 0;

  for (const value of values) {
    sum += value;
  }

  return sum;
};

const multiply = function(values) {
  let product = 1;

  for (const value of values) {
    product *= value;
  }

  return product;

};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(n) {
  if (n === 0) return 1;

  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }

  return product;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
