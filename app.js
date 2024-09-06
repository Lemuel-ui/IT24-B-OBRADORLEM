// Data types
let a = 1;
let b = 5;

let name = "hahaha";
let char = 'a';

// Arithmetic operations
let minus = a - b;
console.log('Subtraction:', minus);

let sum = a + b;
console.log('Addition:', sum);

let multiply = a * b;
console.log('Multiplication:', multiply);

let divide = a / b;
if (b !== 0) {
    console.log('Division:', divide);
} else {
    console.log("Error: Division by zero is not allowed.");
}

// Conditional statements
let age = 16;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

let buangna = 'B';

switch (buangna) {
    case 'A':
        console.log('Action A');
        break;
    case 'B':
        console.log('Action B');
        break;
    case 'C':
        console.log('Action C');
        break;
    case 'D':
        console.log('Action D');
        break;
    default:
        console.log('Default Action');
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log('For Loop:', i);
}

let j = 0;
while (j < 5) {
    console.log('While Loop:', j);
    j++;
}

// Function programming
function checkOddEven(num) {
    return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
}

console.log(checkOddEven(4));
console.log(checkOddEven(7));
