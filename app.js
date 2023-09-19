let firstNumber = 0;
let secondNumber = 0;
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
    return a / b;
}

function operate(operator, num1, num2) {

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

// Gets the clicked input and stores it in an array
const getEnteredNumber = function (clickedButton) {
    const buttonValue = clickedButton.innerHTML;
    if (buttonValue == "+" || buttonValue == "-" || buttonValue == "*" || buttonValue == "x" || buttonValue == "/" || buttonValue == ".") {
        operator = buttonValue;
    } else if (buttonValue == "C") {
        firstNumber = 0;
        secondNumber = 0;
        result;
        operator = "";
        displayArray = [];
        populateScreen();
    } else if (buttonValue == "=") {
        operate(operator, firstNumber, secondNumber);
        console.log(result);
    } else {
        displayArray.push(buttonValue);
        arrayConverter(displayArray);
        return displayArray;
    }
}

// Converts the array created in getEnteredNumber() into a string to display for the user. Needed to remove ","s?
const arrayConverter = function (displayArray) {
    let arrayToString = displayArray.toString();
    let formattedString = arrayToString.replace(/,/g, "");
    populateScreen(formattedString);
    return formattedString;
}

// Populates the screen with the entered string, and converts it back to a number for calculation
const populateScreen = function (formattedString) {
    const screen = document.querySelector('.screen');
    screen.textContent = formattedString;
    return firstNumber = Number(formattedString);
}
