'use strict';
const screen = document.getElementById('screen');
const ac = document.getElementById('ac');
const signkey = document.getElementById('signkey');
const percentkey = document.getElementById('percentkey');
const dividekey = document.getElementById('dividekey');
const multiplykey =  document.getElementById('multiplykey');
const subtractkey = document.getElementById('subtractkey');
const addkey = document.getElementById('addkey');
const equalskey = document.getElementById('equalskey');
const decimalkey = document.getElementById('decimalkey');

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
let currentop = 0;
let currentvalue = 0;
let priorvalue = 0;
let operating = false;

screen.innerText = currentvalue;

ac.addEventListener('click', clearCalculator);
addkey.addEventListener('click', addOp);
subtractkey.addEventListener('click', subtractOp);
multiplykey.addEventListener('click', multiplyOp);
dividekey.addEventListener('click', divideOp);
signkey.addEventListener('click', changeSignOp);
percentkey.addEventListener('click', percentOp);
decimalkey.addEventListener('click', decimalOp);
equalskey.addEventListener('click', operate);

zero.addEventListener('click', inputKey);
one.addEventListener('click', inputKey);
two.addEventListener('click', inputKey);
three.addEventListener('click', inputKey);
four.addEventListener('click', inputKey);
five.addEventListener('click', inputKey);
six.addEventListener('click', inputKey);
seven.addEventListener('click', inputKey);
eight.addEventListener('click', inputKey);
nine.addEventListener('click', inputKey);

document.addEventListener('keydown', function(event) {
  if (currentvalue == '0') {
    currentvalue = '';
  } else if (operating) {
    currentvalue = '';
    operating = false;
  } else if (currentvalue == 'ERROR!') {
    currentvalue = '';
  }
  
  if (event.key == 1) {
    currentvalue += '1';
    return screen.innerText = currentvalue;
  } else if (event.key == 2) {
    currentvalue += '2';
    return screen.innerText = currentvalue;
  } else if (event.key == 3) {
    currentvalue += '3';
    return screen.innerText = currentvalue;
  } else if (event.key == 4) {
    currentvalue += '4';
    return screen.innerText = currentvalue;
  } else if (event.key == 5) {
    currentvalue += '5';
    return screen.innerText = currentvalue;
  } else if (event.key == 6) {
    currentvalue += '6';
    return screen.innerText = currentvalue;
  } else if (event.key == 7) {
    currentvalue += '7';
    return screen.innerText = currentvalue;
  } else if (event.key == 8) {
    currentvalue += '8';
    return screen.innerText = currentvalue;
  } else if (event.key == 9) {
    currentvalue += '9';
    return screen.innerText = currentvalue;
  } else if (event.key == 0) {
    currentvalue += '0';
    return screen.innerText = currentvalue;
  }
});

function inputKey(key) {
  if (currentvalue == '0') {
    currentvalue = '';
  } else if (operating) {
    currentvalue = '';
    operating = false;
  } else if (currentvalue == 'ERROR!') {
    currentvalue = '';
  }
  currentvalue += key.currentTarget.innerText;
  return screen.innerText = currentvalue;
}

function clearCalculator() {
  currentop = 0;
  currentvalue = 0;
  priorvalue = 0;
  screen.innerText = currentvalue;
}

function operate() {
  switch (currentop) {
    case 1:
      currentvalue = add(priorvalue, currentvalue);
      screen.innerText = currentvalue;
      break;
    case 2:
      currentvalue = subtract(priorvalue, currentvalue);
      screen.innerText = currentvalue;
      break;
    case 3:
      currentvalue = multiply(priorvalue, currentvalue);
      screen.innerText = currentvalue;
      break;
    case 4:
      currentvalue = divide(priorvalue, currentvalue);
      screen.innerText = currentvalue;
      break;
  }
}

function changeSignOp() {
  currentvalue = (-1) * currentvalue;
  screen.innerText = currentvalue;
}

function percentOp() {
  currentvalue = currentvalue / 100;
  screen.innerText = currentvalue;
}

function decimalOp() {
  if (currentvalue.includes('.')) {
    return;
  }
  currentvalue += '.';
  screen.innerText = currentvalue;
}

function addOp() {
  if (priorvalue) {
    operate();
  }
  currentop = 1;
  priorvalue = currentvalue;
  operating = true;
}

function subtractOp() {
  if (priorvalue) {
    operate();
  }
  currentop = 2;
  priorvalue = currentvalue;
  operating = true;
}

function multiplyOp() {
  if (priorvalue) {
    operate();
  }
  currentop = 3;
  priorvalue = currentvalue;
  operating = true;
}

function divideOp() {
  if (priorvalue) {
    operate();
  }
  currentop = 4;
  priorvalue = currentvalue;
  operating = true;
}

function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(a, b) {
  return +a * +b;
}

function divide(a, b) {
  if (+b == 0) {
    return 'ERROR!';
  } else {
    return +a / +b;
  }
}