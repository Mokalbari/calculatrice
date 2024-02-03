// Basic maths functions
// Your calculator is going to contain functions for all of the basic math operators you typically find on calculators,
// so start by creating functions for the following items and testing them in your browser’s console. 
const mathFunctions = {
    add: (a,b) => a+b,
    substract: (a,b) => a-b,
    divide: (a,b) => a/b,
    multiply: (a,b) => a*b,
}
// If a number or operator is clicked, store the ID value inside one of these.
let firstOperand=[];
let operator="";
let lastOperand =[];
let result="";


//Link to DOM
const calculatorButtons = document.querySelector(".calculator-buttons")
const displayMainScreen = document.querySelector("#main-screen")
const displaySecondScreen = document.querySelector("#small-screen")

// Update the main screen everytime a num / operator is clicked
// // The function converts the array to a string and conc. number
const updateMainScreen = () => {
    if(result==="") {
    displayMainScreen.textContent = `${firstOperand.join("")} ${operator} ${lastOperand.join("")}`;
    }else if(result!=="") {
    displaySecondScreen.textContent = displayMainScreen.textContent;
    displayMainScreen.textContent = result;
    }
}

// The function Clear Area empties the first operand/ operator/ last operand
const clearAll = () => {
    displayMainScreen.textContent="";
    displaySecondScreen.textContent="";
    firstOperand=[];
    operator="";
    lastOperand =[];
    result="";
}

const backBtn = () => {
    if (operator!=="" && lastOperand.length>0){
        lastOperand.pop();
    } else if (operator!==""){
        operator="";
    }else if (operator===""){
        firstOperand.pop()
    }
}


// The function calculate conc.numb from first operand + last operands.
// Switch operator contains + / - / / / *
// // Apply correct ath functions
// // update main screen with result.
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


// If the class num is clicked
calculatorButtons.addEventListener("click", (event) => {
// // Verify ID !== 0 unless first operand!=="" ou last operand !==""
    if (event.target.classList.contains("num")) {
        if (event.target.id==="0" && firstOperand.length===0){
            return
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
        backBtn();
    } else if (event.target.id==="equal") {
        calculateResult();
        
    }
    updateMainScreen()
})

// // Is the operator empty ?
// // // If yes store value inside first operand
// // // Otherwise store the value inside the second operand

// If the class operator is clicked
// // Store the value inside operator.
// //( The operator value CANNOT contain multiple operator)

// If the clear button is clicked
// // Call the function clearAll()

//If the back button is clicked
// // Is the operator empty ?
// // // If yes pop last value from firstOperand array
// // // Otherwise pop last value from lastOperand array

//If the button equal is clicked
// // Convert string to number
// // Call the funtion calculate result
// // // Where a=first operand, b=operator, c=last operand

// update main screen.
