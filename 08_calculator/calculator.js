const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((acc, num) => acc + num, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	return !num ? 1 : factorial(num - 1) * num;
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
