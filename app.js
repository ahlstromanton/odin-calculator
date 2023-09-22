let activeNumber = 0;
let passiveNumber = 0;
let calculatedActiveNumber = 0;
let calculatedPassiveNumber = 0;
let result;
let operator = "";
let displayArray = [];
let calculationArray = [];


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
        calculatedPassiveNumber = calculatedActiveNumber;
        calculatedActiveNumber = 0;
    } else if (buttonValue == "C") {
        fullReset();
        populateScreen();
    } else if (buttonValue == "=") {
        operate(operator, calculatedActiveNumber, calculatedPassiveNumber);
        console.log(result);
    } else {
        displayArray.push(buttonValue);
        arrayConverter(displayArray);
        stringToNumber(buttonValue);
        return displayArray;
    }
    return buttonValue;
}

// Creates number array of input numbers
const stringToNumber = function (number) {
    let inputConvertedToNumber = Number(number);
    calculationArray.push(inputConvertedToNumber);
    // This should probably be called when operate() runs (line 60)
    numberArrayToNumber(calculationArray);
}

// Creates number of array of numbers
const numberArrayToNumber = function (calculationArray) {
    let convertedNumber = calculationArray.map(Number);
    console.log(convertedNumber);
    calculatedActiveNumber = convertedNumber;
    return calculatedActiveNumber;
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
    return activeNumber = Number(formattedString);
}

const fullReset = function () {
    activeNumber = 0;
    calculatedActiveNumber = 0;
    passiveNumber = 0;
    calculatedPassiveNumber = 0;
    result = 0;
    operator = "";
    displayArray = [];
    calculationArray = [];
}

// Maybe have two different arrays; one for displaying the numbers in the frontend, and one for the actual calculation