// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = [
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
  "x",
  "y",
  "z",
];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = [
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
  "?",
  "+",
  "'",
  '"',
  ",",
  "/",
  ";",
  ":",
  "<",
  ">",
  "~",
  "_",
  "`",
  "|",
];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//character functions
function generateLowCase() {
  var randomChar = alphabet[Math.floor(Math.random() * alphabet.length) - 1];
  return randomChar;
}

function generateUpCase() {
  var randomChar = alphabet[Math.floor(Math.random() * alphabet.length) - 1];
  return randomChar.toUpperCase();
}

function generateNumChar() {
  var randomChar = number[Math.floor(Math.random() * number.length) - 1];
  return randomChar;
}

function generateSpecChar() {
  var randomChar = special[Math.floor(Math.random() * special.length) - 1];
  return randomChar;
}

//define generatePassword function
function generatePassword() {
  //VARIABLES --------------------------------------------
  // password length (prompt), variable
  var passowordLength = parseInt(
    prompt("How long do you want your password? (8-128 characters)")
  );
  // lowercase characters (confirm), variable
  var lowCase = confirm(
    "Would you like your password to contain lowercase characters?"
  );
  //uppercase characters (confirm), variable
  var upCase = confirm(
    "Would you like your password to contain uppercase characters?"
  );
  //number characters (confirm), variable
  var numChar = confirm("Would you like your password to contain numbers?");
  //special characters (confirm), variable
  var specChar = confirm(
    "Would you like your password to contain special characters?"
  );
  //function array for password characters
  var functionArray = [];
  var password = [];
  // MAIN LOGIC --------------------------------------
  //error handling
  //if pw length is <7 and >129, alert "please enter 8-128", return, call write pw function
  return writePassword();

  //if none of four check variables is true, alert "please choose a password criteria", return, call write pw function

  // password generating, character by character inside of a loop
  // checking for variable confirms, stored in an array by a function
  if (lowCase) {
    functionArray.push(generateLowCase);
  }

  if (upCase) {
    functionArray.push(generateUpCase);
  }
  //for loop to generate password
  for(var i = 1, i < passwordLength, i++) {
     var randomFunction =
    functionArray[Math.floor(Math.random() * functionArray.length) - 1];
  password.push(randomFunction());
  }}
 

  //after loop
  return password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
