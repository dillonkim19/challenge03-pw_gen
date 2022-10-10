// Assignment Code
var generateBtn = document.querySelector("#generate");

const upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowCase = upCase.map(letter => letter.toLowerCase())
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

const askHowLong = function(){
  
  let passLength = prompt("How many characters would you like your password to be? (8 - 128)", "12");

  if (passLength < 8 || passLength > 128) passLength = askHowLong();

  return passLength
}



var generatePassword = function(){
  
  var passLength = askHowLong();
  console.log(passLength);




}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
