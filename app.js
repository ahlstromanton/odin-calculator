let firstNumber = 0;
let secondNumber = 0;
let operator;

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

function buttonPress() {
    const button = document.querySelector('.number');
    const clickedButton = button.innerHTML;
    populateScreen(clickedButton);
}

function populateScreen(clickedButton) {
    const screen = document.querySelector('.screen');
    screen.textContent = clickedButton; //This will update the screen everytime a button is clicked. Need to add logic so that it is added to the end of the string
}
