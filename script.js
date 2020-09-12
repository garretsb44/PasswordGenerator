// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  
  var result = "";
  var rLower = "abcdefghijklmnopqrstuvwxyz"; 
  var rUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var rNumber = "0123456789";
  var symbols = "!@#$%^&*()=,.<>/'";
  var posschar = rLower;


  // prompt user for number of password chars
  
  var numChars = prompt("How long should the password be?");

  // IF length is < 8 OR length is > 128
  // alert password length must be from 8 to 128

  if (numChars < 8 || numChars > 128) {
    alert("Password length must be from 8 to 128.");
  } else {
  
  var l_char = prompt("Enter 1 for lowercase");

  var u_char = prompt("Enter 1 for uppercase");
  
  var n_char = prompt("Enter 1 for numbers");

  var s_char = prompt("Enter 1 for symbols");

  // return the result

  // if l_char

  if (l_char == 1) {
    result = result +getRandomLower(rLower);
    // this lone commented out becuase we default posschar to rLower
    // posschar = posschar + rLower;
  } 

  if (u_char == 1) {
    result = result +getRandomUpper(rUpper);
    posschar = posschar + rUpper;
  } 

  if (n_char == 1) {
    result = result +getRandomNumber(rNumber);
    posschar = posschar + rNumber; 
  } 

  if (s_char == 1) {
    result = result +getRandomSymbol(symbols);
    posschar = posschar + symbols;
  } 


  
  for (; result.length< numChars;) {
      result = result + getRandomNext(posschar);
      
    }
  }
  return result;
}
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

  
// function generatePassword() {
//   var result = "";  
    
//     var specialChar = prompt("Does the password include a lowercase");
  
     
//   // iF result is not true
//   // alert password must be lowercase
  
//       if (specialChar === no) {
//     alert ("Password must be lowercase");
//   }   else {
  
//     // return the result
//   result;
// }
//   }

function getRandomNext(x) {
  return x[Math.floor(Math.random() * x.length)]; 
  
}


// // function for random lowercase letters
  function getRandomLower(rLower){
    // var rLower = "abcdefghijklmnopqrstuvwxyz" 
    return rLower[Math.floor(Math.random() * rLower.length)]; 
  }
  
// // function for random uppercase letters
  function getRandomUpper(rUpper){
  // var rUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  return rUpper[Math.floor(Math.random() * rUpper.length)];
}

// // function for random numbers
function getRandomNumber(rNumber){
  // var rNumber = "0123456789" 
  return rNumber[Math.floor(Math.random() * rNumber.length)];
}


// // function for random symbols
function getRandomSymbol(symbols){
  // var symbols = "!@#$%^&*()=,.<>/'"
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(getRandomNumber()); 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




