//importing required characters for character set object
import { numbers, symbols, lowercaseLetters, uppercaseLetters } from "./characters.js";

//grabbing elements from the DOM
const outputOne = document.getElementById("display-password");
const numberInput = document.querySelector(".inputNumber");
const rangeInput = document.querySelector(".inputRange");
const validationMessage = document.getElementById("validation-message");
const copyMessage = document.getElementById("copy-message");

//object where keys represent character types
const characterSets = {
  upper: uppercaseLetters,
  lower: lowercaseLetters,
  number: numbers,
  symbols: symbols,
};

function passwordGenerator() {
  const passwordLengthValue = document.getElementById("length").value;
  let randomIndex = 0;
  let result = getCharacters();
  for (let i = 0; i < passwordLengthValue; i++) {
    randomIndex = Math.floor(Math.random() * result.length);
    outputOne.textContent += result[randomIndex];
  }
}

//this function resets the output value to an empty string after each password is generated
function passwordReset() {
  outputOne.innerHTML = "";
}

function copyMessageReset() {
  copyMessage.innerHTML = "";
}

function validationMessageReset() {
  validationMessage.innerHTML = "";
}

//iterate through checked checkboxes and obtain relevant character types
function getCharacters() {
  const selectedSets = ["upper", "lower", "number", "symbols"].filter(
    (setName) => document.getElementById(`${setName}Inp`).checked
  );

  return selectedSets.map((setName) => characterSets[setName]).flat();
}

//copy to clipboard function
function copyToClipBoard(password) {
  // Copy the text inside the text field
  if (navigator.clipboard.writeText(password.value)) {
    copyMessage.innerHTML = "Password copied to clipboard";
  } else {
    copyMessage.innerHTML = "";
  }
  return;
}

//check if at least one checkbox is ticked
function atLeastOneCheckboxChecked(checkboxes) {
  return Array.from(checkboxes).some((checkbox) => checkbox.checked);
}

//reset all input fields and called passwordGenerator function
function resetAll() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  if (!atLeastOneCheckboxChecked(checkboxes)) {
    validationMessage.innerHTML = "Please select an option from the above";
    return;
  } else {
    passwordReset();
    copyMessageReset();
    validationMessageReset();
    passwordGenerator();
  }
}

// set number and range inputs equal to each other
numberInput.addEventListener("input", (e) => {
  rangeInput.value = e.target.value;
});
rangeInput.addEventListener("input", (e) => {
  numberInput.value = e.target.value;
});

// trigger the reset functions when a user clicks the "generate" icon
document.getElementById("btn-1").addEventListener("click", () => {
  resetAll();
});

document.getElementById("copy1").addEventListener("click", function () {
  copyToClipBoard(outputOne);
});

document.getElementById("copy2").addEventListener("click", function () {
  copyToClipBoard(outputOne);
});

//check if at least one textbox is checkbox
// trigger the reset functions when a user clicks the "generate passwords" button
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  resetAll();
});
