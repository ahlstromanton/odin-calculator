let firstNumber = 0;
let secondNumber = 0;
let operator;
let displayArray = [];

// is it better to define functions the other way? I.e:
// const add = function(a, b) { return a + b; };

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
    return a / b;
}

function operate(operator, num1, num2) {
    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
        case "x":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            console.log("Invalid operator");
            return;
    }
    return result;
}

const enterNumber = function (clickedButton) {
    const buttonValue = clickedButton.innerHTML;
    displayArray.push(buttonValue);
    let arrayToString = displayArray.toString();
    let formattedString = arrayToString.replace(/,/g, "");
    populateScreen(formattedString);
    return formattedString;
}

const populateScreen = function (formattedString) {
    const screen = document.querySelector('.screen');
    screen.textContent = formattedString;
    return firstNumber = Number(formattedString);
}