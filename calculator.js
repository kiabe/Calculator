// calculator basic math functions: add, subtract, multiply, and divide
function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return Math.round(a * b * 100) / 100;
};

function divide(a,b) {
    if (b === 0) {
        return 'ERROR'
    } else {
        return Math.round(a / b * 100) / 100;
    }
};

// function that calls the basic functions when given 2 nums and an operator
function operate(operator, num1, num2) {
    let result = '';
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (operator === 'add' || operator === '+') {
        result = add(n1, n2);
    } else if (operator === 'subtract' || operator === '-') {
        result = subtract(n1, n2);
    } else if (operator === 'multiply' || operator === '*') {
        result = multiply(n1, n2);
    } else if (operator === 'divide' || operator === '/') {
        result = divide(n1, n2);
    }
    if (result.toString().length <= 19) {
        console.log(result.length);
        return result;
    } else {
        return result.toExponential(3);
    }
};

// upon button click, clear display and set back to default 0
function clearDisplay() {
    display.textContent = '0';
    calculator.removeAttribute('data-first-value');
    calculator.removeAttribute('data-operator');
}

function clearClass() {
    calculator.removeAttribute('data-previous-key-type');
}

function clearOperator() {
    calculator.removeAttribute('data-operator');
}

// constants for DOM manipulation
const calculator = document.querySelector('#container'); // display and buttons
const display = document.querySelector('#display'); // where numbers on calculator are seen after pressing corresponding key
display.textContent = '0'; // sets initial display on calculator to 0 like a physical calculator

const allClear = document.querySelector('#allClear'); // AC button
const numberPad = document.querySelectorAll('.number'); // selects all buttons relevant to putting on display: 0-9
const decimalPoint = document.querySelector('#decimal');
const operatorButtons = document.querySelectorAll('.operator'); // selects operators
const equalButton = document.querySelector('#equal'); // equal button

const buttons = document.querySelectorAll('button'); // selects all buttons on calculator

// click on AC button will clear current display field and reset to initial display of 0
allClear.addEventListener('click', clearDisplay);

// listens to all buttons on calculator. if button clicked, perform task based on what button was clicked
buttons.forEach((button) => {
    button.addEventListener('click', e => {
        if (e.target.matches('button')) {
            console.log('this be button');
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const currentNum = display.textContent; // what is being shown on calculator display
            const previousKeyType = calculator.dataset.previousKeyType;

            if (!action) {
                if (currentNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent;
                    calculator.dataset.previousKeyType = 'number';
                    clearClass();
                } else if (display.textContent.length < 19) {
                    display.textContent = currentNum + keyContent;
                } else {
                    display.textContent;
                }
            };

            if (action === 'decimal') {
                if (previousKeyType === 'operator') {
                    display.textContent = '0.';
                } else if (!currentNum.includes('.')) {
                    display.textContent = currentNum + '.';
                }
                calculator.dataset.previousKeyType = 'decimal';
            };

            if (action === 'clear') {
                clearDisplay();
                calculator.dataset.previousKeyType = 'clear';
            };

            if (
                action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide'
                ) {
                    const firstOperand = calculator.dataset.firstValue; // first number saved before getitng cleared to display the second number
                    calculator.dataset.firstValue = currentNum; // first value for calculation is given a custom data attribute to save it before replacing with second operand

                    const secondOperand = currentNum; // second number is what the current display shows after inputting a second number

                    const operator = calculator.dataset.operator; // operator is saved based on the operator key that is pressed
                    calculator.dataset.operator = action; // saves operator value

                    calculator.dataset.previousKeyType = 'operator'; // adds custom data attribute that indicates what kind of key was pressed previously

                    console.log('operator key pressed');

                    if (firstOperand && 
                        operator && 
                        previousKeyType !== 'operator'
                        ) {
                        const calculatedValue = operate(operator, firstOperand, secondOperand); // need a variable so we can differentiate this value from first value inputted
                        display.textContent = calculatedValue;
                        calculator.dataset.firstValue = calculatedValue; // sets first value to calculated value rather than previously inputted number
                    } else {
                        calculator.dataset.firstValue = currentNum;
                    }
                };

            if (action === 'calculate') {
                const firstOperand = calculator.dataset.firstValue; // first number saved before getitng cleared to display the second number
                const secondOperand = currentNum; // second number is what the current display shows
                const operator = calculator.dataset.operator; // operator is saved based on the operator key that is pressed

                display.textContent = operate(operator, firstOperand, secondOperand);
                calculator.dataset.previousKeyType = 'calculate';
                clearOperator();
            }
        }
    })
})