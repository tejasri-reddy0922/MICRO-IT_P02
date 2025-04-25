let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += ' ' + operator + ' ';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (e) {
    currentInput = 'Error';
    updateDisplay();
  }
}
