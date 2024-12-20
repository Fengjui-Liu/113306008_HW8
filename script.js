document.getElementById('calculateBtn').addEventListener('click', () => {
    // Get user inputs
    const num1 = parseFloat(document.getElementById('number1').value);
    const operator = document.getElementById('operator').value;
    const num2 = parseFloat(document.getElementById('number2').value);
    const resultDisplay = document.getElementById('resultDisplay');

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Result = Invalid input. Please enter numbers.';
        return;
    }

    // Perform calculation
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 === 0) {
                resultDisplay.textContent = 'Result = Error: Division by zero.';
                return;
            }
            result = divide(num1, num2);
            break;
        default:
            resultDisplay.textContent = 'Result = Invalid operator.';
            return;
    }

    // Display result
    resultDisplay.textContent = `Result = ${result.toFixed(2)}`;
});

// Operation functions
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
