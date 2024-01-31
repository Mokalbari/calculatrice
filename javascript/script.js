// Basic maths functions
// Your calculator is going to contain functions for all of the basic math operators you typically find on calculators,
// so start by creating functions for the following items and testing them in your browser’s console. 
const calculator = {
    add: (a,b) => a+b,
    substract: (a,b) => a-b,
    divide: (a,b) => a/b,
    multiply: (a,b) => a*b,
}
// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. 
// Create three variables for each of the parts of a calculator operation.
// Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
let firstOperand = 2
let operator = calculator.multiply
let lastOperand = 2

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const operate = (a,b,c) => {
    return b(a,c)
}
console.log(operate(firstOperand, operator, lastOperand))