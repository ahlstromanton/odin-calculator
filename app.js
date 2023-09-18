let firstNumber = 0;
let secondNumber = 0;

function add() {
    return a + b;
}

function subtract() {
    return a - b;
}

function multiply() {
    return a * b;
}

function divide() {
    return a / b;
}



const button = document.querySelectorAll('.number');
button.onclick = function () {
    let chosenNumber = document.querySelector('.number').innerHTML;
    console.log(chosenNumber);
    return chosenNumber;
}



// Get the first input as a array of strings?, i.e. "1" "1" "1" "1" = 1111
function firstNumberConverter() {
    let firstNumberArray = [];
    while (firstNumberArray.length <= 5) {
        let number = document.querySelectorAll('.number'); //Osäker på denna
        firstNumberArray.push(number);
    }
    let firstNumberString = firstNumberArray.toString();
    let firstNumber = parseInt(firstNumberString);
    return firstNumber;
}
// Maybe needed to concatinate to a string? I.e. "1" + "1" + "1" + "1" > "1111"

// Then convert to number: "1111" > 1111

// Assign this to a variable (a)

// Then do the same for the second variable

// Then run the appropriate function with the two variables assigned above

