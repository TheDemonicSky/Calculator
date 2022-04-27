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

  delete() {
    this.currentNumber = this.currentNumber
      .toString()
      .split("")
      .slice(0, length - 1)
      .join("");
    this.updateDisplay();
  }

  appendNumber(number) {
    if (number === "." && this.currentNumber.includes(".")) return;
    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  chooseOperation(operation) {
    this.previousNumber = this.currentNumber;
    this.currentNumber = "";
    this.operation = operation;
    this.updateDisplay();
  }

  compute(currentNumber, previousNumber) {
    switch (this.operation) {
      case "÷":
        this.currentNumber = divide(currentNumber, previousNumber);
        break;
      case "*":
        this.currentNumber = multiply(currentNumber, previousNumber);
        break;
      case "-":
        this.currentNumber = subtract(currentNumber, previousNumber);
        break;
      case "+":
        this.currentNumber = add(currentNumber, previousNumber);
        break;
    }
    this.previousNumber = "";
    this.updateDisplay();
  }

  updateDisplay() {
    this.currentNumberTextElement.innerText = this.currentNumber;
    this.previousNumberTextElement.innerText = this.previousNumber;
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

equalsButton.addEventListener("click", () => {
  calculator.compute(
    Number(currentNumberTextElement.innerText),
    Number(previousNumberTextElement.innerText)
  );
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

function add(num1, num2) {
  return num2 + num1;
}

function subtract(num1, num2) {
  return num2 - num1;
}

function multiply(num1, num2) {
  return num2 * num1;
}

function divide(num1, num2) {
  return num2 / num1;
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
