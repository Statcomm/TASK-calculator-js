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

let numbersArray = [];
let assemblyArray = [];
let valueInput = "";

function buttonClick(text) {
  console.log("Clicking", text);
  if (op(text)) {
    printOnConsole(numbersArray);
    for (let i = 0; i < numbersArray.length; i++) {
      valueInput = valueInput + numbersArray[i];
    }
    assemblyArray.push(valueInput);
    valueInput = "";
    numbersArray = [];
  } else {
    if (text == 0 && numbersArray[0] == 0) {
      numbersArray[0].pop();
    } else if (text === "AC") {
      numbersArray = [];
    } else {
      numbersArray.push(text);
    }
  }

  printOnConsole(numbersArray.join(""));

  console.log(assemblyArray);
}

function op(text) {
  const operator =
    text == "+" ||
    text == "-" ||
    text == "x" ||
    text == "÷" ||
    text == "%" ||
    text == "±";
  return operator;
}
/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
// printOnConsole("123");
updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
