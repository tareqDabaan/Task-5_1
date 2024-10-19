let displaya = document.getElementById(".display");
let divide = document.querySelector(".divide");
let mult = document.querySelector(".multiply");
let sub = document.querySelector(".subtract");
let sum = document.querySelector(".sum");
let equal = document.querySelector(".equal");

/* ------------------- Add the clicked number to the input ------------------ */
function appendToDisplay(input) {
  display.value += input;
}

/* --------------------- Clear Input when AC is clicked --------------------- */
function clearDisplay() {
  display.value = "";
}

/* ------------------ Delete last number when DC is clicked ----------------- */
function deleteNumber() {
  let currentNumber = display.value;

  display.value = currentNumber.slice(0, -1);
}

/* --------------------------- Calc the operation --------------------------- */

function calculate() {
  // Store the evaluation in a variable
  let expression = display.value;
  console.log(expression);
  
  // Execute the function on the expression and store the result in a variable 
  let result = evaluateExpression(expression);
  console.log(result);
  
  display.value = result;
}

/* ------------------- Function to evaluate the expression ------------------ */
function evaluateExpression(expression) {
  let operator;
  let firstNumer = "";
  let secondNumber = "";
  let isSecond = false;

  // Loop through each character of the expression
  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    // Check if the character is an operator
    if (char === '+' || char === '-' || char === '*' || char === '/') {
      operator = char; // Store the char in the operator variable
      isSecond = true; // Now we're reading the second number
    } else {
      // If we are still reading the first number
      if (!isSecond) {
        firstNumer += char; // Build the first number 
      } else {
        secondNumber += char; // Build the second number 
      }
    }
  }

  // Parse the first and second elements as floating-point numbers
  firstNumer = parseFloat(firstNumer);
  secondNumber = parseFloat(secondNumber);

  // Perform the operation based on the operator
  if (operator === '+') {
    return firstNumer + secondNumber;

  } else if (operator === '-') {
    return firstNumer - secondNumber;
  
  } else if (operator === '*') {
    return firstNumer * secondNumber;
  
  } else if (operator === '/') {
    return firstNumer / secondNumber;
  }}

  