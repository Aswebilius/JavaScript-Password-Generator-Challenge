// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  }

  function passwordLength(){
     window.prompt("Please type in Password Character Length (must be no less than 8 characters and no more than 128 characters):");
  }

  function upperCaseChar(){
    window.confirm("Accept Uppercase Characters?");
  }

  function lowerCaseChar(){
    window.confirm("Accept Lowercase Characters?");
  }

  function numericChar{
    window.confirm("Accept Numeric Characters?");
  }

  function specialChar(){
    window.confirm("Accept Special Characters?");
  }

  function generatePassword(){

  }
  passwordText.value = password;
  
 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

