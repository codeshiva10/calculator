function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '0';
}

function deleteLast() {
  const display = document.getElementById('display');
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0';
  }
}

function appendToDisplay(value) {
  const display = document.getElementById('display');
  const operators = ['+', '-', '*', '/'];
  const lastChar = display.value[display.value.length - 1];

  if (
    (operators.includes(value) && operators.includes(lastChar)) ||
    (value === '.' && lastChar === '.')
  ) {
    return;
  }

  if (display.value === '0') {
    if (value === '.') {
      display.value = '0.';
    } else if (operators.includes(value)) {
      display.value += value;
    } else {
      display.value = value;
    }
  } else {
    display.value += value;
  }
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    if (/[+\-*/.]$/.test(display.value)) {
      display.value = display.value.slice(0, -1);
    }
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// ✅ New Feature: Percentage
function calculatePercentage() {
  const display = document.getElementById('display');
  try {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
      display.value = value / 100;
    }
  } catch {
    display.value = 'Error';
  }
}

// ✅ New Feature: Square Root
function calculateSquareRoot() {
  const display = document.getElementById('display');
  try {
    const value = parseFloat(display.value);
    if (value < 0) {
      display.value = 'Invalid';
    } else {
      display.value = Math.sqrt(value);
    }
  } catch {
    display.value = 'Error';
  }
}
