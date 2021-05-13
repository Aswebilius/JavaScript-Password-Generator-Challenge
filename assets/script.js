// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //function passwordLength(){

  }

  function generatePassword(){
      passwordLength = prompt("Please type in Password Character Length (must be no less than 8 characters and no more than 128 characters):");
      upperCaseChar = confirm("Accept Uppercase Characters?");
      lowerCaseChar = confirm("Accept Lowercase Characters?");
      numericChar = confirm("Accept Numeric Characters?");
      specialChar = confirm("Accept Special Characters?");
  }
  
  passwordText.value = password;
  
 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

