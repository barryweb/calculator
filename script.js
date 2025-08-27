let numberA = null;
let numberB = null;
let operator = null;

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function divide(a, b) {

	if (a === 0 && b === 0) {
		return "Result is undefined";
	}
	if (Number(a) && b === 0) {
		return "Cannot divide by zero"
	}
	return a / b;
}

function multiply(a, b) {
	return a * b;
}

function returnExponent(a, b) {
	return Math.pow(a, b);
}

function returnSqrt(a) {
	return Math.sqrt(a);
}

function returnPI() {
	return Math.PI;
}

function applyPercent(a) {
	return a / 100;
}

function toggleSign(a) {
	return a * -1;
}

function roundToTwoDecimals(result) {
	return parseFloat(result.toFixed(2));
}

function operate(a, b, calculate) {
	return calculate(a, b);
}

