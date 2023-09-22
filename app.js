let activeNumber = 0;
let calculatedActiveNumber = 0;
let result;
let operator = "";
let displayArray = [];

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error";
    }
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            console.log("Invalid operator");
            return;
    }
}

function getEnteredNumber(clickedButton) {
    const buttonValue = clickedButton.innerHTML;
    if (buttonValue === "=") {
        if (operator !== "" && displayArray.length > 0) {
            calculatedActiveNumber = operate(operator, calculatedActiveNumber, Number(displayArray.join("")));
            operator = "";
            displayArray = [calculatedActiveNumber];
            populateScreen(calculatedActiveNumber);
        }
    } else if (buttonValue === "C") {
        fullReset();
        populateScreen(activeNumber);
    } else if (["+", "-", "*", "x", "/"].includes(buttonValue)) {
        if (operator === "") {
            calculatedActiveNumber = Number(displayArray.join(""));
            operator = buttonValue;
            displayArray = [];
        } else {
            operator = buttonValue;
        }
    } else {
        displayArray.push(buttonValue);
        populateScreen(displayArray.join(""));
    }
}

function populateScreen(content) {
    const screen = document.querySelector('.screen');
    screen.textContent = content;
}

function fullReset() {
    activeNumber = 0;
    calculatedActiveNumber = 0;
    operator = "";
    displayArray = [];
    populateScreen(activeNumber);
}
