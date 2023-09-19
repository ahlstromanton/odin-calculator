let firstNumber = 0;
let secondNumber = 0;
let operator;
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

function buttonPress(clickedButton) {
    const buttonValue = clickedButton.innerHTML;
    displayArray.push(buttonValue);
    populateScreen(displayArray);
    return displayArray;
}

function populateScreen(clickedButton) {
    const screen = document.querySelector('.screen');
    let arrayToString = displayArray.toString();
    let shownValue = arrayToString.replace(/,/g, "");
    screen.textContent = shownValue; //This will update the screen everytime a button is clicked. Need to add logic so that it is added to the end of the string
}


