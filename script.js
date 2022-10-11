// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for criteria
const upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowCase = upCase.map(letter => letter.toLowerCase())
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

// Function to get a random integer value
const getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
}

// Function that asks length of password
const askHowLong = function() {
  
  let passLength = prompt("How many characters would you like your password to be? (8 - 128)", "12");

  if (passLength < 8 || passLength > 128) passLength = askHowLong();

  return passLength
}

// Function that asks for criteria of password
const askCriteria = function() {

  var criteria = [];
  
  // Ask if user wants upper case letters
  if (confirm("Would you like to have upper case letters?")) {
    console.log("YES UPPER CASE!!!!");
    criteria.push(upCase);
    console.log(criteria);
  }

  // Ask if user wants lower case letters
  if (confirm("Would you like to have lower case letters?")) {
    console.log("YES LOWER CASE!!!!");
    criteria.push(lowCase);
    console.log(criteria);
  }

  // Ask if user wants numbers
  if (confirm("Would you like to have numbers?")) {
    console.log("YES NUMBERS!!!!");
    criteria.push(numbers);
    console.log(criteria);
  }

  // Ask if user wants special characters
  if (confirm("Would you like to have special characters?")) {
    console.log("YES SPECIAL CHARACTERS!!!!");
    criteria.push(special);
    console.log(criteria);
  }

  return criteria;

}

// Function that generates a password 
var generatePassword = function() {
  
  // Ask for password length
  var passLength = askHowLong();
  console.log(passLength);

  // Ask for password criteria
  var criteria = askCriteria();
  console.log(criteria);

  console.log(criteria[3][3]);

  // Create random password
  var password = '';
  for (var i = 0; i < passLength; i++){

    // Chooses a random criteria from criteria array
    randomCriteria = getRandomInt(criteria.length);
    console.log(randomCriteria);
    
    // Chooses a random character from that criteria
    randomCharacter = getRandomInt(criteria[randomCriteria].length);
    console.log(randomCharacter);
    
    console.log(criteria[randomCriteria][randomCharacter]);
    
    // Adds that character to the password string
    password = password.concat(criteria[randomCriteria][randomCharacter])
    console.log(password);

  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
