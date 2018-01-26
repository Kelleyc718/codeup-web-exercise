'use strict';


// Make a function named sayHello(name) that returns "Hi " + name.
function sayHello(name) {
  return 'Hi ' + name + '.';
}

//Write a function named capitalize(string) that takes a string of any capitalization and uppercases the first character and lowercases the rest of the characters of a string.

function capitalize (string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize('thIS IS MY STRING'));

// Write a function named upperCase(string)
function upperCase (string) {
  return string.toUpperCase();
}

console.log(upperCase(string));

// Make a function named identity(input) that returns the input exactly as provided.
function identity (input) {
  return input;
}

//Make a function named isOdd(number)
function isOdd (number) {
  return number % 2 !== 0;
}

// Make a function named isEven(number)
function isEven (number) {
  return number % 2 === 0;
}

// Make a function named isPositive(number)
function isPositive (number) {
  return number > 0;
}

// Make a function named isNegative(number)
function isNegative (number) {
  return number < 0;
}

// Make a function named isBoolean(input)
function isBoolean (input) {
  return typeOf(input) === 'boolean';
}
// Make a function named isTrue(boolean)
function isTrue(boolean) {
  return !!boolean;
}
// Make a function named isFalse(boolean)
function isFalse (boolean) {
  return !boolean;
}

// Make a function named isTruthy(input)
function isTruthy (input) {
  return !!input;
}

// Make a function named isFalsy(input)
function isFalsey (input) {
  return !input;
}

// Make a function named isVowel(letter)
function isVowel (letter) {
  var vowels = ['a','e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]) {
      return true;
    }
  }
  return false;
}

// Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels
function hasVowels(string) {
  for (var i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      return true;
    }
  }
  return false;
}

// Make a function named isConsonant(letter)
function isConsonant (letter) {
  return !isVowel(letter);
}

// Make a function named hasConsonants(string)
function hasConsonants (string) {
  for (var i = 0; i < string.length; i++) {
    if (isConsonant(string[i]) && string[i] !== ' ' ) {
      return true;
    }
  }
  return false;
}

// Make a function named isCapital(letter)
function isCapital (letter) {
  return letter.toUpperCase() === letter;
}

// Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
function hasCapitalLetters (string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}

// Make a function named isLowerCase(letter)
function isLowerCase (letter) {
  return letter !== '' && letter.toLowerCase() === letter;
}

console.log(isLowerCase(''));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased
function hasLowerCase(string) {
  for (var i = 0; i < string.length; i++) {
    if (isLowerCase(string[i])) {
      return true;
    }
  }
  return false;
}

// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace (letter) {
  return letter === ' ';
}

console.log(isSpace(' '));

// Make a function named hasSpaces(string) that returns if a string has any space characters
function hasSpaces(string) {
  return string.includes(' ');
}

console.log(hasSpaces('I am a string'));

// Make a function named isZero(number)
function isZero (number) {
  return number === 0;
}

// Make a function named increment(number) that returns a number plus one
function increment (number) {
  return number++;
}

// Make a function named decrement(number) that returns a number minus one
function decrement (number) {
  return number--;
}

// Make a function named isFive(input)
function isFive (input) {
  return typeof input === 'number' && input === 5;
}

// Make a function named addFive(input) that adds five to some input.
function addFive (input) {
  input += 5;
  return input;
}

console.log(addFive(3));

// Make a function named isMultipleOfFive(input)
function isMultipleOfFive (input) {
  return input % 5 === 0;
}

console.log(isMultipleOfFive(500));

// Make a function named isThree(input)
function isThree (input) {
  return typeof input === 'number' && input === 3;
}

// Make a function named isMultipleOfThree(input)
function isMultipleOfThree (input) {
  return input % 3 === 0;
}

// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive (input) {
  return input % 15 === 0;
}

console.log(isMultipleOfThreeAndFive(30));

// Write a function named lowerCase(string)
function lowerCase (string) {
  return string.toLowerCase();
}

// Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.
function capitalizeEachWord (string) {
  var newArr = [];
  var arrWords = string.split(' ');
  for (var i = 0; i < arrWords.length; i++) {
    newArr.push(arrWords[i][0].toUpperCase() + arrWords[i].slice(1).toLowerCase());
  }
  return newArr.join(' ');
}

console.log(capitalizeEachWord('Here is my string'));

// Write a function named add(a, b) that returns the sum of a and b
function add (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return 'Inputs are not valid numbers.';
}

// Write a function named subtract(a, b) that returns a minus b
function subtract (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  return 'Inputs are not valid numbers.';
}
// Write a function named multiply(a, b) that returns the product of a times b
function multiply (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  }
  return 'Inputs are not valid numbers.';
}

// Write a function named divide(a, b) that returns a divided by b
function divide (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a / b;
  }
  return 'Inputs are not valid numbers.';
}

// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a % b;
  }
  return 'Inputs are not valid numbers.';
}

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
function isBlank (input) {
  return (/\s/.test(input));
}

console.log(isBlank(' '));

// Make a function named isNumeric(input) returns true/false if the input is a number or numeric string
function isNumber (input) {
  return !isNaN(input);
}

console.log(isNumber('5'));

// Make a function named trim(string) that removes empty spaces before and after the input.
function trim (string) {
  return string.trim();
}
