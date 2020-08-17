// Assignment code here

// Get character from ASCII code
var getChar = function (min, max) {
  var characters = [];
  for (i = min; i <= max; i++) {
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
  while (isNaN(setCharLength) || setCharLength < 8 || setCharLength > 128) {
    setCharLength = window.prompt("Invalid input. Please choose a password length that is at least 8 characters and no more than 128 characters.")
  }

  // Set initial state of variables
  var includeLower = false;
  var includeUpper = false;
  var includeNumbers = false;
  var includeSpecial = false;

  // Choose characters for password string
  var chooseChar = function () {
    includeLower = window.confirm("Would you like to include lowercase characters?");
    includeUpper = window.confirm("Would you like to include uppercase characters?");
    includeNumbers = window.confirm("Would you like to include numbers?");
    includeSpecial = window.confirm("Would you like to include special characters?");

    // // Check if characters are included
    // console.log(includeLower);
    // console.log(includeUpper);
    // console.log(includeNumbers);
    // console.log(includeSpecial);

    return (includeLower, includeUpper, includeNumbers, includeSpecial)
  }

  chooseChar();

  // Validating that at least one selection has been made
  while (!includeLower && !includeUpper && !includeNumbers && !includeSpecial) {
    window.alert("You must select at least one type of character. Please try again.")
    var charTypes = chooseChar();
  }

  // Character types included in password
  var passwordCharTypes = [];

  if (includeLower) {
    passwordCharTypes = passwordCharTypes.concat(lowerCase)
  }
  if (includeUpper) {
    passwordCharTypes = passwordCharTypes.concat(upperCase)
  }
  if (includeNumbers) {
    passwordCharTypes = passwordCharTypes.concat(numbers)
  }
  if (includeSpecial) {
    passwordCharTypes = passwordCharTypes.concat(specialChar)
  }

  // // Check character types in password string
  // console.log(passwordCharTypes)

  // Generate password
  var password = [];

  for (i = 0; i < setCharLength; i++) {
    password += passwordCharTypes[Math.floor(Math.random() * passwordCharTypes.length)]
  }
  // // Check password string
  // console.log(password)

  return password
}

// Variable declarations and calling function to get characters
var setCharLength;
var lowerCase = getChar(97, 122);
var upperCase = getChar(65, 90);
var numbers = getChar(48, 57);
var specialChar = getChar(33, 47).concat(getChar(58, 64)).concat(getChar(91, 96)).concat(getChar(123, 126));

// // Check all characters in array 
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
