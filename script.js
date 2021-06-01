// Assignment Code
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols = "!@#$%^&*()_-+={[}]|:;?/>.<,";
var numbers = "0123456789";
// var availableChars = 

// Write password to the #password input
function writePassword(
  characterAmount,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols
) {
  // var password = generatePassword();
  var password = ""
// build the avaiable characters string.
var availableChars = ""
if (includeUpperCase) {
  availableChars += uppercase // this is exactly equal to availableChars = availableChars + uppercase
}
if (includeLowerCase) {
  availableChars += lowercase 
}
if (includeNumbers) {
  availableChars += numbers
}
if (includeSymbols) {
  availableChars += symbols
}
for (let i = 0; i < characterAmount; i++) {
 
  
}


 

// console.log(hasLower,hasUpper, hasSymbols, hasNumbers);
// loop over the string characterAmount times
for (let i = 0; i < characterAmount.length; i++) {
  const element = characterAmount[i];
  CDATASection
}
  passwordText.value = password;

}
function generatePassword(){
  
  var userLower = confirm("Would you like to include lowercase letters?");
  var userUpper = confirm("Would you like to include uppercase letters?");
  var userSymbols = confirm("Would you like to include symbols?");
  var userNumbers = confirm("Would you like to include numbers?");
  var passwordLength = +prompt("enter a number between 8 and 128");
  writePassword(passwordLength, userUpper, userLower, userNumbers, userSymbols)
                                         
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword );
