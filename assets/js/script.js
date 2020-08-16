// Assignment code here

// Get character from ASCII code
var getChar = function (min, max) {
  var characters = [];
  for ( i = min ; i <= max ; i++ ) {
    characters.push(String.fromCharCode(i));
  }
  
  return characters;

}

var generatePassword = function () {

  // Prompt for length of password 
  // Length of at least 8 and no more than 128 characters
  setCharLength = window.prompt("Please choose a password length. Password must be at least 8 characters and no more than 128 characters.");

  // Convert input string into integers
  setCharLength = parseInt(setCharLength)

  // Confirm number is at least 8 and no more than 128 characters
  while ( isNaN(setCharLength) || setCharLength < 8 || setCharLength > 128 )  {
    setCharLength = window.prompt("Invalid input. Please choose a password length that is at least 8 characters and no more than 128 characters.")
  }
    
}

// Variable declarations and calling function to get characters
var setCharLength;
var lowerCase = getChar(97,122);
var upperCase = getChar(65,90);
var numbers = getChar(48,57);
var specialChar = getChar(33,47).concat(getChar(58,64)).concat(getChar(91,96)).concat(getChar(123,126));

// Check all characters in array 
// console.log(lowerCase);
// console.log(upperCase);
// console.log(numbers);
// console.log(specialChar);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
