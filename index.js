/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */

// PROGRAMMING
// PrintConsole will be displaying an array that displays string
// The butonClick will push elements into the array for display
// if we put an operator, it does not print and will instead refresh for
// the next set of strings
// AC will clear the array

let num1;
let num2;
let operator;
let result;
let history = [];

function buttonClick(text) {
  console.log("Clicking", text);
  if (text == "+" || text == "-" || text == "x" || text == "÷" || text == "%") {
    operator = text;
  } else if (text == "AC") {
    printOnConsole(0);
    num1 = num2 = 0;
  } else if (!isNaN(text)) {
    printOnConsole(text);
    if (!num1) num1 = +text;
    else if (operator) num2 = +text;
  } else if (text == "=") {
    result = calc(num1, num2, operator);
    printOnConsole(result);
    history.push(`${num1} ${operator} ${num2} = ${result}`);
    updateHistory(history);
  }
}

function calc(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "÷":
      return num1 / num2;
    case "%":
      return num1 % num2; //need to fix
  }
}

/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
// printOnConsole("123");
//updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
