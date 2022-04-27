class Calculator {
  constructor(previousNumberTextElement, currentNumberTextElement) {
    this.previousNumberTextElement = previousNumberTextElement;
    this.currentNumberTextElement = currentNumberTextElement;
    this.clear();
  }

  clear() {
    this.currentNumber = "";
    this.previousNumber = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === "." && this.currentNumber.includes(".")) return;
    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  chooseOperation(operation) {
    this.previousNumberTextElement.innerText = this.currentNumber;
    this.currentNumber = "";
  }

  compute() {}

  updateDisplay() {
    this.currentNumberTextElement.innerText = this.currentNumber;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousNumberTextElement = document.querySelector(
  "[data-previous-number]"
);
const currentNumberTextElement = document.querySelector(
  "[data-current-number]"
);

const calculator = new Calculator(
  previousNumberTextElement,
  currentNumberTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "/":
      return divide(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "+":
      return add(num1, num2);
  }
}
