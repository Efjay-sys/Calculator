let firstNumber = '';
let secondNumber = '';
let operator = '';
let displayValue = '0';

function updateToDisplay () {
    document.getElementById('display').textContent = displayValue;
}

function appendChar(char) {
    if (displayValue === '0' || displayValue === firstNumber) {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateToDisplay();
}

function setOperator(op) {
    if (firstNumber === '') {
        firstNumber = displayValue;
    } else if (secondNumber === '') {
        secondNumber = displayValue;
        firstNumber = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
        displayValue = firstNumber;
        updateDisplay();
        secondNumber = '';
    }
    operator = op;
    displayValue = firstNumber;
    updateDisplay();
}

function calculate() {
    if (firstNumber !== '' && operator !== '' && displayValue !== '') {
        secondNumber = displayValue;
        const result = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
        displayValue = result;
        updateDisplay();
        firstNumber = result;
        secondNumber = '';
        operator = '';
    }
}

function operate(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) return 'Error';
            return num1 / num2;
        default:
            return 0;
    }
}

// Logic updated , needs to correct syntax to work with my current HTML tags