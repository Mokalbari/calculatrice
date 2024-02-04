// Basic maths functions that will be called later
const mathFunctions = {
    add: (a,b) => a+b,
    substract: (a,b) => a-b,
    divide: (a,b) => a/b,
    multiply: (a,b) => a*b,
}


// Storage for later operations
let firstOperand=[];
let operator="";
let lastOperand =[];
let result="";


//Link to DOM
const calculatorButtons = document.querySelector(".calculator-buttons")
const displayMainScreen = document.querySelector("#main-screen")
const displaySecondScreen = document.querySelector("#small-screen")


// Functions to clarify the code structure while doing operations.
const updateMainScreen = () => {
    if(result==="") {
    displayMainScreen.textContent = `${firstOperand.join("")} ${operator} ${lastOperand.join("")}`;
    }else if(result!=="") {
    displaySecondScreen.textContent = displayMainScreen.textContent;
    displayMainScreen.textContent = result;
    }
}

const clearAll = () => {
    displayMainScreen.textContent="";
    displaySecondScreen.textContent="";
    firstOperand=[];
    operator="";
    lastOperand =[];
    result="";
}

const backSpace = () => {
    if (operator!=="" && lastOperand.length>0){
        lastOperand.pop();
    } else if (operator!==""){
        operator="";
    }else if (operator===""){
        firstOperand.pop()
    }
}


// The function calculate conc.numb from first operand + last operands.
// First need to join array num and convert to number.
const calculateResult = () => {
    let firstOperandValue = parseFloat(firstOperand.join(""))
    let lastOperandValue = parseFloat(lastOperand.join(""))
    switch (operator) {
        case "+" :
            result = mathFunctions.add(firstOperandValue,lastOperandValue);
            break;
        case "-" :
            result = mathFunctions.substract(firstOperandValue,lastOperandValue);
            break;
        case "/" :
            result = mathFunctions.divide(firstOperandValue,lastOperandValue);
            break;
        case "*" :
            result = mathFunctions.multiply(firstOperandValue,lastOperandValue);
            break;
        default:
            return;
    }
}

// The main eventlistener. This makes sure the first input number is not a 0 or a dot.
calculatorButtons.addEventListener("click", (event) => {
    if (event.target.classList.contains("num")) {
        if (event.target.id==="0" && firstOperand.length===0){
            return;
        } else if (event.target.id==="." && firstOperand[0]==="."){
            return;
        }
        operator==="" ?
            firstOperand.push(event.target.textContent):
            lastOperand.push(event.target.textContent);
    } else if (event.target.classList.contains("operator")) {
        firstOperand!=="" ?
            operator=event.target.id:
            operator="";
    } else if (event.target.id==="clear-btn"){
        clearAll();
    } else if (event.target.id==="back-btn") {
        backSpace();
    } else if (event.target.id==="equal") {
        calculateResult();
    }
    updateMainScreen()
})