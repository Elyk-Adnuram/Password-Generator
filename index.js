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
  console.log(result);
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
  navigator.clipboard.writeText(password.value);
  alert("Password copied to clipboard");
}

copy1.addEventListener("click", function () {
  copyToClipBoard(outputOne);
});

copy2.addEventListener("click", function () {
  copyToClipBoard(outputTwo);
});

//these characters are used to generate the random password
const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
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
