// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
;
var capsAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = "!@#$%^&*()?+',/;:<>~_`|".split("");

//character functions -----------------------------------------------------
function generateLowCase() {
  var randomLow = alphabet[Math.floor(Math.random() * alphabet.length)];
  return randomLow;
}

function generateUpCase() {
  var randomUp = capsAlphabet[Math.floor(Math.random() * alphabet.length)];
  return randomUp;
}

function generateNumChar() {
  var randomNum = number[Math.floor(Math.random() * number.length)];
  return randomNum;
}

function generateSpecChar() {
  var randomSpec = special[Math.floor(Math.random() * special.length)];

  return randomSpec;
}

//define generatePassword function
function generatePassword() {
  //VARIABLES --------------------------------------------
  // password length (prompt), variable
  var passwordLength = prompt(
    "How long do you want your password? (8-128 characters)"
  );
  
  //stop program if user cancels
  if (passwordLength == null) {
    alert("Okay then.");
    return; }

    //error check for password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128.");
    return writePassword();
  }



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
  //error check for no criteria chosen
  if (
    lowCase == false &&
    upCase == false &&
    numChar == false &&
    specChar == false
  ) {
    alert("Please choose a critera for your password.");
    return writePassword();
  }
  //function array for password characters
  var functionArray = [];
  var password = [];

  // MAIN LOGIC --------------------------------------

  // password generating, character by character inside of a loop
  // checking for variable confirms, stored in an array by a function
  if (lowCase) {
     functionArray = functionArray.concat(alphabet);
  }

  if (upCase) {
    functionArray = functionArray.concat(capsAlphabet);
  }

  if (numChar) {
    functionArray = functionArray.concat(number)
  }

  if (specChar) {
    functionArray = functionArray.concat(special);
  }

  //for loop to generate password
  for (var i = 0; i < passwordLength; i++) {
    var randomFunction =
      functionArray[Math.floor(Math.random() * functionArray.length)];
      password.push(randomFunction);
  }
console.log(password);
  //if statement to ensure that every true confirm is in the generated password
if (lowCase){
  password[6] = generateLowCase();
}

if (upCase) {
   password[2] = generateUpCase();
}

if (numChar) {
   password[5] = generateNumChar();
}

if (specChar) {
   password[3] = generateSpecChar();
}
  
  //after loop joins the array of password characters into the strong password
  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
