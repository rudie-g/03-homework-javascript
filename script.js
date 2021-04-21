function generatePassword() {
  // Create arrays to hold uppercase, lowercase, numeric, and special characters respectively
  var specialPW = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    ")",
    "(",
    "-",
    "_",
    "+",
    "}",
    "{",
    "]",
    "[",
    "/",
    ":",
    "'",
    ",",
    "\\",
    "?",
    "."
  ];
  var numericPW = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercasePW = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var uppercasePW = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  // Create an empty array
  var thePW = [];
  // Create a random number generator that accepts two parameters, a minimum and maximum within which to work
  function getRandom (x, y) {
    return Math.random() * (y - x) + x;
  }
  // Create a function to randomly select from an array
  function getRandomArray(array) {
    let chosen = array[Math.floor(Math.random() * array.length)];
    return chosen;
  }
  // Durstenfeld shuffle algorithm
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }
  // Generate password length
  var pwLength = getRandom(8, 128);
  // Prompt user for parameters
  var uppercaseChar = confirm("Do you want uppercase characters?");
  var specialChar = confirm("Do you want special characters?");
  var numericChar = confirm("Do you want numeric characters?");
  // When the user selects OK for all confirms
  if (uppercaseChar === true && specialChar === true && numericChar === true) {
        // Generate a password using all arrays
        for (i = 0; i < pwLength; i++) {
          getRandomArray(lowercasePW);
          thePW = thePW.concat(getRandomArray(lowercasePW));
          getRandomArray(uppercasePW);
          thePW = thePW.concat(getRandomArray(uppercasePW));
          getRandomArray(specialPW);
          thePW = thePW.concat(getRandomArray(specialPW));
          getRandomArray(numericPW);
          thePW = thePW.concat(getRandomArray(numericPW));
        }
  // When the user declines the use of numeric characters      
  } else if (uppercaseChar === true && specialChar === true && numericChar !== true) {
        // Generate a password with all arrays except numericPW
        for (i = 0; i < pwLength; i++) {
          getRandomArray(lowercasePW);
          thePW = thePW.concat(getRandomArray(lowercasePW));
          getRandomArray(uppercasePW);
          thePW = thePW.concat(getRandomArray(uppercasePW));
          getRandomArray(specialPW);
          thePW = thePW.concat(getRandomArray(specialPW));
        }
  // When the user declines the use of special characters
  } else if (uppercaseChar === true && specialChar !== true && numericChar === true) {
        // Generate a password with all arrays except specialPW
        for (i = 0; i < pwLength; i++) {
          getRandomArray(lowercasePW);
          thePW = thePW.concat(getRandomArray(lowercasePW));
          getRandomArray(uppercasePW);
          thePW = thePW.concat(getRandomArray(uppercasePW));
          getRandomArray(numericPW);
          thePW = thePW.concat(getRandomArray(numericPW));
        }
  // When the user declines the use of uppercase characters
  } else if (uppercaseChar !== true && specialChar === true && numericChar === true) {
        // Generate a password with all arrays except uppercasePW
        for (i = 0; i < pwLength; i++) {
          getRandomArray(lowercasePW);
          thePW = thePW.concat(getRandomArray(lowercasePW));
          getRandomArray(specialPW);
          thePW = thePW.concat(getRandomArray(specialPW));
          getRandomArray(numericPW);
          thePW = thePW.concat(getRandomArray(numericPW));
        }
  // When the user declines the use of special and numeric characters
  } else if (uppercaseChar === true && specialChar !== true && numericChar !== true) {
        // Generate a password with the lowercasePW and uppercasePW arrays
        for (i = 0; i < pwLength; i++) {
          getRandomArray(lowercasePW);
          thePW = thePW.concat(getRandomArray(lowercasePW));
          getRandomArray(uppercasePW);
          thePW = thePW.concat(getRandomArray(uppercasePW));
        }
  // When the user declines the use of uppercase and numeric characters
  } else if (uppercaseChar !== true && specialChar === true && numericChar !== true) {
        // Generate a password with the lowercasePW and specialPW arrays
        for (i = 0; i < pwLength; i++) {
          getRandomArray(lowercasePW);
          thePW = thePW.concat(getRandomArray(lowercasePW));
          getRandomArray(specialPW);
          thePW = thePW.concat(getRandomArray(specialPW));
        }
  // When the user declines the use of uppercase and special characters
  } else if (uppercaseChar !== true && specialChar !== true && numericChar === true) {
        // Generate a password using the lowercasePW and numericPW arrays
        for (i = 0; i < pwLength; i++) {
          getRandomArray(lowercasePW);
          thePW = thePW.concat(getRandomArray(lowercasePW));
          getRandomArray(numericPW);
          thePW = thePW.concat(getRandomArray(numericPW));
        }
  // When the user declines all confirms
  } else if (uppercaseChar !== true && specialChar !== true && numericChar !== true) {
    // Generate a password using the lowercasePW array
    for (i = 0; i < pwLength; i++) {
      getRandomArray(lowercasePW);
      thePW = thePW.concat(getRandomArray(lowercasePW));
    }
  }
  // Shuffle the password
  shuffleArray(thePW);
  // The password is an array, format the commas out when returning it
  return thePW.join("");  
  }

  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);