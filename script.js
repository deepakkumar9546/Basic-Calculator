let currentInput = '';
let previousInput = '';
let operation = null;

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operation === null) return;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr === 0 ? 'Error' : prev / curr;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateResult();
}

function clearResult() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}
