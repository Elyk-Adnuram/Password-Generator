//grab the output1 field from the DOM
const outputOne = document.getElementById("output1");
//grab the output2 field from the DOM
const outputTwo = document.getElementById("output2");
//grab the generate passwords button from the DOM
const button1 = document.getElementById("btn-1");
//the length of the password
const passwordLength = 15;

//this event listener triggers the passwordReset and passwordGenerator functions when a user clicks the "generate passwords" button
button1.addEventListener("click", function () {
  passwordReset();
  passwordGenerator();
});

//this function loops through the characters array and selects 15 random characters that are displayed in the output fields
function passwordGenerator() {
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);
    outputOne.textContent += characters[randomIndex];
    outputTwo.textContent += characters[randomIndex2];
  }
}

//this function resets the output value to an empty string after each password is generated
function passwordReset() {
  outputOne.value = "";
  outputTwo.value = "";
}

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
