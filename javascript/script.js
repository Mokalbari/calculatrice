// Basic maths functions
// Your calculator is going to contain functions for all of the basic math operators you typically find on calculators,
// so start by creating functions for the following items and testing them in your browser’s console. 
const mathFunctions = {
    add: (a,b) => a+b,
    substract: (a,b) => a-b,
    divide: (a,b) => a/b,
    multiply: (a,b) => a*b,
}
// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. 
// Create three variables for each of the parts of a calculator operation.
// Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
let firstOperand="";
let operator="";
let lastOperand ="";

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const calculateResult = (a,b,c) => {
    return b(a,c)
}

//Link to DOM
const calculatorButtons = document.querySelector(".calculator-buttons")
const displayMainScreen = document.querySelector("#main-screen")


// Functions to clear and update screen
updateMainScreen = () => {
    displayMainScreen.textContent=firstOperand+operator+lastOperand;
}

clearAll = () => {
    firstOperand="";
    operator="";
    lastOperand="";
    updateMainScreen();
}

// Each time a button is clicked
calculatorButtons.addEventListener("click", (event) => {
    if (event.target.classList.contains("num")) {
        if (operator===""){
        firstOperand += event.target.id.toString();
        updateMainScreen();
        } else if (operator!==""){
        lastOperand += event.target.id.toString();
        updateMainScreen();
        } 
    } else if (event.target.classList.contains("operator") && firstOperand!==""){
        operator = event.target.id.toString();
        updateMainScreen();
    } else if (event.target.id === "clear-btn") {
        clearAll();
    }
})
// EVerytime a num button is clicked firstOperand+= id value.
// If an operator class is clicked add to operator.
// If an operator is present the num button is stored in last operand.