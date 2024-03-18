/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers() {
    let firstNumber = Number(document.querySelector("#add1").value);
    let secondNumber = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(firstNumber, secondNumber);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const Subtract = function(number1, number2){
    return number1 - number2;
}

const subtractNumbers = function() {
    let firstNumber = Number(document.querySelector("#subtract1").value);
    let secondNumber = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = Subtract(firstNumber, secondNumber);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let firstNumber = Number(document.querySelector("#factor1").value);
    let secondNumber = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(firstNumber, secondNumber);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
    let firstNumber = Number(document.querySelector("#dividend").value);
    let secondNumber = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(firstNumber, secondNumber);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
const getTotal = document.querySelector("#getTotal");
const total = document.querySelector("#total");

getTotal.addEventListener("click", () => {
    const subtotal = Number(document.querySelector("#subtotal").value);
    const member = document.querySelector("#member").checked;

    if (member) {
        total.textContent = `$${(subtotal * 0.8).toFixed(2)}`;
    } else {
        total.textContent = `$${subtotal.toFixed(2)}`;
    }
});



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
let oddArray = numbersArray.filter(number => number % 2 !== 0);
document.querySelector("#odds").innerText = oddArray;

/* Output Evens Only Array */
let evenArray = numbersArray.filter(number => number % 2 === 0);
document.querySelector("#evens").innerHTML = evenArray;

/* Output Sum of Org. Array */
let sumArray = numbersArray.reduce((sum, number) => sum + number, 0); // Add initial value 0
document.querySelector("#sumOfArray").innerHTML = sumArray;

/* Output Multiplied by 2 Array */
let multiplyArray = numbersArray.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = multiplyArray;

/* Output Sum of Multiplied by 2 Array */
let sumMultiplyArray = multiplyArray.reduce((accumulator, number) => accumulator + number, 0); // Add initial value 0
document.querySelector("#sumOfMultiplied").innerHTML = sumMultiplyArray;

