'use strict';
const ac = document.getElementById('ac');
const signkey = document.getElementById('signkey');
const percentkey = document.getElementById('percentkey');
const dividekey = document.getElementById('dividekey');
const multiplykey =  document.getElementById('multiplykey');
const subtractkey = document.getElementById('subtractkey');
const addkey = document.getElementById('addkey');
const qualskey = document.getElementById('equalskey');
const decimalkey = document.getElementById('decimalkey');
const screen = document.getElementById('screen');
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


zero.addEventListener('click', showInDisplay);
one.addEventListener('click', showInDisplay);
two.addEventListener('click', showInDisplay);
three.addEventListener('click', showInDisplay);
four.addEventListener('click', showInDisplay);
five.addEventListener('click', showInDisplay);
six.addEventListener('click', showInDisplay);
seven.addEventListener('click', showInDisplay);
eight.addEventListener('click', showInDisplay);
nine.addEventListener('click', showInDisplay);

ac.addEventListener('click', showInDisplay);


function showInDisplay(key) {
  if (key.currentTarget == ac) {
    return screen.innerText = 0;
  }
  return screen.innerText = key.currentTarget.innerText;
}

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
  if (b == 0) {
    return 'ERROR!';
  } else {
    return a / b;
  }
}



function onScreen(button) {

}