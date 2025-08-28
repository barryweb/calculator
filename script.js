let numberA = "";
let numberB = "";
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
	if (b === 0) {
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

buttons.forEach((button) => {

	button.addEventListener("click", (e) => {
		
		const numSymbValue = button.textContent;

		if (button.classList.contains("number")) {

			if (!operator) {

				displayNumberA(numSymbValue);
			} else {

				displayNumberB(numSymbValue);
			}

		} else if (button.classList.contains("operator")) {

			if (button.classList.contains("sqrt")) {

				numberA = returnSqrt(Number(numberA));
			} else if (button.classList.contains("percent")) {

				numberA = applyPercent(Number(numberA));
			} else if (button.classList.contains("togglesign")) {

				numberA = toggleSign(Number(numberA));
			} else if (button.classList.contains("pi")) {

				numberA = returnPI();
			} else if (button.classList.contains("roundtwo")) {

				numberA = roundToTwoDecimals(Number(numberA));
			}
			else {

				if (operator && numberB !== "") {
					
					updateDisplayResult(numberA, numberB, numSymbValue);
				}
				operator = assignOperator(button, numSymbValue);
				return;
			}

			display.textContent = numberA;
			numberB = "";
			operator = null;

			} else if (button.classList.contains("equals")) {

				if (operator && numberB !== "") {
					updateDisplayResult(numberA, numberB, operator);
				}
			}
	})
})

function displayNumberA(value) {

	numberA += value;
	display.textContent = numberA;
}

function displayNumberB(value) {

	numberB += value;
	display.textContent = numberB;
}

function assignOperator(button, value) {

	if (button.classList.contains("plus")) value = add;
	if (button.classList.contains("subtract")) value = subtract;
	if (button.classList.contains("times")) value = multiply;
	if (button.classList.contains("divide")) value = divide;
	if (button.classList.contains("exponent")) value = returnExponent;
	return value;
}

function updateDisplayResult(a, b, calculate) {

	const result = operate(Number(a), Number(b), calculate)
	numberA = result;
	numberB = "";
	display.textContent = result;
}


