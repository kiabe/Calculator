function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
};

function operate(operator, num1, num2) {
    if (operator === 'add' || operator === '+') {
        return add(num1, num2);
    } else if (operator === 'subtract' || operator === '-') {
        return subtract(num1, num2);
    } else if (operator === 'multiply' || operator === '*') {
        return multiply(num1, num2);
    } else if (operator === 'divide' || operator === '/') {
        return divide(num1, num2);
    } else {
        return "Operation not recognized";
    };
};

// upon button click, clear display and set back to default 0
function clearAll() {
    display.textContent = '0';
}

function clearNumber() {}

// constants for DOM manipulation
const display = document.querySelector('#display');
display.textContent = '0'; // sets initial display on calculator to 0 like a physical calculator

const allClear = document.querySelector('#allClear'); // AC button
const numberPad = document.querySelectorAll('.number'); // selects all buttons relevant to putting on display: 0-9 and decimal point
const operatorButtons = document.querySelectorAll('.operator'); // selects operators
const equalButton = document.querySelector('#equal'); // equal button

// functions for calculator

// buttons 0-9 and '.' will update calculator display field on click
numberPad.forEach((number) => {
    number.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target)
        // textContent will be method of extracting content of buttons on click
        console.log(e.target.textContent);
        let newDisplay = e.target.textContent;
        console.log(newDisplay);
        let currentNum = display.textContent; // defaults at 0
        if (currentNum === '0') {
            display.textContent = newDisplay;
        } else {
            display.textContent = currentNum + newDisplay;
        };
    });
});

// click on AC button will clear current display field and reset to initial display of 0
allClear.addEventListener('click', clearAll);

// calculator object that holds operands and operator
let calc = {
    operand1: 5,
    operator: undefined,
    operand2: 6
};