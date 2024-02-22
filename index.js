//grabbing elements from the DOM
const outputOne = document.getElementById("display-password");
const generateBtn = document.getElementById("btn-1");
const numberInput = document.querySelector(".inputNumber");
const rangeInput = document.querySelector(".inputRange");
const copy1 = document.getElementById("copy1");
const copy2 = document.getElementById("copy2");
const uppercaseCheckBox = document.getElementById("upperInp");
const lowercaseCheckBox = document.getElementById("lowerInp");
const numberCheckBox = document.getElementById("numberInp");
const symbolsCheckBox = document.getElementById("symbolsInp");
const form = document.querySelector("form");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const validationMessage = document.getElementById("validation-message");
const copyMessage = document.getElementById("copy-message");

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

function getCharacters() {
  let characters = [];
  if (
    uppercaseCheckBox.checked &&
    lowercaseCheckBox.checked &&
    numberCheckBox.checked &&
    symbolsCheckBox.checked
  ) {
    //add uppercase letters, lowercase letter, numbers and symbols to the characters array using the  spread operator
    characters = [...numbers, ...symbols, ...uppercaseLetters, ...lowercaseLetters];
  } else if (uppercaseCheckBox.checked && lowercaseCheckBox.checked && numberCheckBox.checked) {
    characters = [...lowercaseLetters, ...uppercaseLetters, ...numbers];
  } else if (uppercaseCheckBox.checked && lowercaseCheckBox.checked && symbolsCheckBox.checked) {
    characters = [...lowercaseLetters, ...uppercaseLetters, ...symbols];
  } else if (uppercaseCheckBox.checked && lowercaseCheckBox.checked) {
    characters = [...lowercaseLetters, ...uppercaseLetters];
  } else if (numberCheckBox.checked && symbolsCheckBox.checked) {
    characters = [...numbers, ...symbols];
  } else if (numberCheckBox.checked && uppercaseCheckBox.checked) {
    characters = [...numbers, ...uppercaseLetters];
  } else if (numberCheckBox.checked && lowercaseCheckBox.checked) {
    characters = [...numbers, ...lowercaseLetters];
  } else if (lowercaseCheckBox.checked && symbolsCheckBox.checked) {
    characters = [...lowercaseLetters, ...symbols];
  } else if (uppercaseCheckBox.checked && symbolsCheckBox.checked) {
    characters = [...uppercaseLetters, ...symbols];
  } else if (uppercaseCheckBox.checked) {
    characters = [...uppercaseLetters];
  } else if (lowercaseCheckBox.checked) {
    characters = [...lowercaseLetters];
  } else if (numberCheckBox.checked) {
    characters = [...numbers];
  } else if (symbolsCheckBox.checked) {
    characters = [...symbols];
  }
  return characters;
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

// set number and range inputs equal to each other
numberInput.addEventListener("input", (e) => {
  rangeInput.value = e.target.value;
});
rangeInput.addEventListener("input", (e) => {
  numberInput.value = e.target.value;
});

// listener triggers the passwordReset and passwordGenerator functions when a user clicks the "generate passwords" button
generateBtn.addEventListener("click", () => {
  if (!atLeastOneCheckboxChecked(checkboxes)) {
    validationMessage.innerHTML = "At least once checkbox must be checked";
    return;
  } else {
    passwordReset();
    copyMessageReset();
    passwordGenerator();
  }
});

copy1.addEventListener("click", function () {
  copyToClipBoard(outputOne);
});

copy2.addEventListener("click", function () {
  copyToClipBoard(outputOne);
});

//check if at least one textbox is checkbox
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!atLeastOneCheckboxChecked(checkboxes)) {
    validationMessage.innerHTML = "At least once checkbox must be checked";
    return;
  } else {
    passwordReset();
    copyMessageReset();
    passwordGenerator();
  }
});

//these characters are used to generate the random password
const uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
// const characters = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "~",
//   "`",
//   "!",
//   "@",
//   "#",
//   "$",
//   "%",
//   "^",
//   "&",
//   "*",
//   "(",
//   ")",
//   "_",
//   "-",
//   "+",
//   "=",
//   "{",
//   "[",
//   "}",
//   "]",
//   ",",
//   "|",
//   ":",
//   ";",
//   "<",
//   ">",
//   ".",
//   "?",
//   "/",
// ];
