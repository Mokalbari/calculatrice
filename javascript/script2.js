// Create some basic math function that will be called on later

// Create a storing array that will store every number and operator.
// Everytime a num class is clicked, add it to the array.
// // The array has to check a few key points :
// // cannot contain a 0 following a 0 after index 0
// // A "." can be used once between every operator




// Links to DOM
const calculatorButtons = document.querySelector(".calculator-buttons");
const mainScreen = document.querySelector("#main-screen");
const smallScreen = document.querySelector("#small-screen");

let mainScreenDisplay = [];
let smallScreenDisplay = [];
let operator = "";
let result = "";

// Maths & functions for operations.
const MathFunctions = {
    add: (a,b) => a+b,
    substract : (a,b) => a-b,
    multiply : (a,b) => a*b,
    divide : (a,b) => a/b,
}


const clearAll = () => {
    mainScreenDisplay=[];
    smallScreenDisplay=[];
    operator="";
    result ="";
    mainScreen.textContent="";
    smallScreen.textContent="";
}

const backSpace = () => {
    if (mainScreenDisplay.length>0) {
        mainScreenDisplay.pop()
    } else if (mainScreenDisplay.length===0 && operator === "") {
        smallScreenDisplay.pop()
    } else if (mainScreenDisplay.length===0 && operator !== "") {
        operator="";
    }
}

const pushNumber = (event) => {
    if (result===""){
        mainScreenDisplay.push(event)
    } else if (result!==""){
        smallScreenDisplay = [];
        mainScreenDisplay = [result];
        result = "";
        operator = "";
        mainScreenDisplay.push(event)
    }
}

const pushOperator = (event) => {
    if (mainScreenDisplay.length===0){
        return
    }
    if (result===""){
        smallScreenDisplay = mainScreenDisplay;
        operator = event
        mainScreenDisplay=[];
    } else if (result!==""){
        smallScreenDisplay = [result];
        result = "";
        operator = event
        mainScreenDisplay=[]
    }
}

const updateScreen = () => {
    if (result===""){
        mainScreen.textContent = mainScreenDisplay.join("");
        smallScreen.textContent = `${smallScreenDisplay.join("")} ${operator}`;
    } else if (result!==""){
        mainScreen.textContent = `${result}`;
        smallScreen.textContent = `${smallScreenDisplay.join("")} ${operator} ${mainScreenDisplay.join("")} = `;
    }

}

const calculateResult = () => {
    let smallScreenValue = parseFloat(smallScreenDisplay.join(""))
    let mainScreenValue = parseFloat(mainScreenDisplay.join(""))
    switch (operator) {
        case "+" :
            result = MathFunctions.add(smallScreenValue,mainScreenValue);
            break;
        case "-" :
            result = MathFunctions.substract(smallScreenValue,mainScreenValue);
            break;
        case "/" :
            result = MathFunctions.divide(smallScreenValue,mainScreenValue);
            break;
        case "*" :
            result = MathFunctions.multiply(smallScreenValue,mainScreenValue);
            break;
        default:
            return;
    }
}


// inputs a number into mainScreenDisplay
calculatorButtons.addEventListener("click", event => {
    if (event.target.id==="0" && mainScreenDisplay[0]==="0"){
        return
    } else if (event.target.classList.contains("num")){
        pushNumber(event.target.id)
    } else if (event.target.classList.contains("operator")) {
        pushOperator(event.target.id)
    } else if (event.target.id==="clear-btn") {
        clearAll()
    } else if (event.target.id==="back-btn") {
        backSpace()
    } else if (event.target.id==="=") {
        calculateResult()
    }
    
    updateScreen()
})