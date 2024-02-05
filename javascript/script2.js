// LINK TO DOM AND GLOBAL SCOPE VAR
const calculatorButtons = document.querySelector(".calculator-buttons");
const mainScreen = document.querySelector("#main-screen");
const smallScreen = document.querySelector("#small-screen");

let mainScreenDisplay = [];
let smallScreenDisplay = [];
let operator = "";
let result = "";

// MATH AND FUNCTIONS
// All functions from the calculator are here as standalone for better readability.
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

// This part shows how the script handles new number and operator.
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
    } else if (result!=="")
        smallScreenDisplay = [result]
        result = "";
        operator = event
        mainScreenDisplay=[]
}

// This function is called everytime a new event happens It will display numbers based on the presence of result
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
    if (mainScreenDisplay.length===0){
        mainScreenDisplay[0]=0
    }
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


// Handle input.
//click button input
calculatorButtons.addEventListener("click", event => {
    if (event.target.id==="0" && mainScreenDisplay[0]==="0"){
        mainScreenDisplay[1]=".";
    } else if (event.target.id==="." && mainScreenDisplay.includes(".")){
        return
    }
    if (event.target.classList.contains("num")){
        pushNumber(event.target.id)
    } else if (event.target.classList.contains("operator")) {
        pushOperator(event.target.id)
    } else if (event.target.id==="clear-btn") {
        clearAll()
    } else if (event.target.id==="back-btn") {
        backSpace()
    } else if (event.target.id==="=") {
        calculateResult()-1
    }
    
    updateScreen()
})

// keydown input
document.addEventListener("keydown", event => {
    const key = event.key;
    switch(key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            if (key==="0" && mainScreenDisplay[0]==="0"){
                mainScreenDisplay[1]=".";
            } else if (key==="." && mainScreenDisplay.includes(".")){
                return
            }
            pushNumber(key);
            break;Suprr

        case '+':
        case '-':
        case '/':
        case '*':
            pushOperator(key);
            break;

        case 'Enter':
            calculateResult();
            break;

        case 'Backspace':
            backSpace();
            break;

        case 'Delete':
            clearAll();
            break;

        default:
            return;
    }
    updateScreen();
    event.preventDefault(); // Prevent default key behavior.
});