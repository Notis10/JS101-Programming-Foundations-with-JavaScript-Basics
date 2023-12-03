const readline = require('readline-sync');
console.log('Welcome to the Calculator!');

console.log('What is the first number you like to operate?')
let number1 = Number(readline.question());

console.log('What is the second number you want to operate?')
let number2 = Number(readline.question());

console.log('What operation would you like to perform with these two numbers? \n 1. Add \n 2. Subtract \n 3. Multiply \n 4. Divide');
let operation = readline.question();

let result;
if (operation === '1' || operation === 'Add' || operation === 'add') {
  result = number1 + number2;
} else if (operation === '2' || operation === 'Subtract' || operation === 'subtract') {
  result = number1 - number2;
} else if (operation === '3' || operation === 'Multiply' || operation === 'multiply') {
  result = number1 * number2;
} else if (operation === '4' || operation === 'Divide' || operation === 'divide') {
  result = number1 / number2;
} else {
  console.log('Please provide correct operation')
}

console.log(`The result of your operation is ${result}`);