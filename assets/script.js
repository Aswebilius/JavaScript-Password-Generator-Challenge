  // Assignment code here

function generatePassword(){
  return upperCase() + lowerCase() + numericChar() + specialChar() + passLength();
}

function passLength(){
  var length = window.confirm("Create a Random Password of at Least 8 Characters?");

  if (length === true){
    return String.fromCharCode(Math.floor(Math.random() *10) + 48) + String.fromCharCode(Math.floor(Math.random() *26) +97) 
    + String.fromCharCode(Math.floor(Math.random() *10) + 48) + String.fromCharCode(Math.floor(Math.random() *26) +97);
  } else { 
    return window.alert("You must choose at least 8 characters to continue!");
  }
}
function upperCase(){
  var upperCase = window.confirm("Accept Uppercase Characters?");

  if (upperCase === true){
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
  } else {
    return window.alert("Password will NOT contain Uppercase Characters!");
  }
}

function lowerCase(){
  var lowerCase = window.confirm("Accept Lowercase Characters?");

  if (lowerCase === true){
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
  } else {
    return window.alert("Password will NOT contain Lowercase Characters!");
  }
}

function numericChar(){
  var numericChar = window.confirm("Accept Numbers?");

  if (numericChar === true){
    return String.fromCharCode(Math.floor(Math.random() *10) + 48);
  } else {
    return window.alert("Password will NOT contain Numbers!");
  }
}

function specialChar(){
  special = '$#@!%^&'
  var specialChar = window.confirm("Accept Special Characters? ($#@!%^&)");
  if (specialChar === true) {
    return special[Math.floor(Math.random() * special.length)];
  } else {
    return window.alert("Password will Not contain Special Characters!");
  }
}

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

