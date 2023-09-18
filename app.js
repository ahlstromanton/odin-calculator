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
    if (operator == "+") {
        return result = add(num1, num2)
    } else if (operator == "-") {
        return result = subtract(num1, num2)
    } else if (operator == "*" || operator == "x") {
        return result = multiply(num1, num2)
    } else if (operator == "/") {
        return result = divide(num1, num2)
    }
    console.log(result);
}