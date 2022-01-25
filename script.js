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
addkey.addEventListener('click', addOp);

function inputKey(key) {
  if (currentvalue == '0') {
    currentvalue = '';
  } else if (operating) {
    currentvalue = '';
  }
  operating = false;
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
      currentvalue = add(currentvalue, priorvalue);
      screen.innerText = currentvalue;
      break;
  }
}

function addOp() {
  currentop = 1;
  priorvalue = currentvalue;
  operating = true;
}

function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return 'ERROR!';
  } else {
    return a / b;
  }
}



function onScreen(button) {

}