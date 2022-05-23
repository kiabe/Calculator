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

function clearAll() {}

function clearNumber() {}

// constants for DOM manipulation
const display = document.querySelector('#display');
console.log(display);
display.textContent = '0';

// functions for calculator

// upon button clicks, updates display
function updateDisplay(e) {
    // let newDisplay = e.target.textContent;
    // console.log(newDisplay);
    // display.textContent = newDisplay;
}


window.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target)
    // textContent will be method of extracting content of buttons on click
    console.log(e.target.textContent);
    let newDisplay = e.target.textContent;
    console.log(newDisplay);
    display.textContent = newDisplay;
})
