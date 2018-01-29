'use strict';

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var numInput = prompt('Please enter a number.');

function whatIsTheNumber (numInput) {
  if (typeof parseInt(numInput) !== 'number') {
    return 'Please enter a number greater than 0';
  }
  return (numInput % 2 === 0) ? (parseInt(numInput) + 100 + ' is even and positive') : (parseInt(numInput) + 100 + ' is odd and positive');
}
console.log(whatIsTheNumber(numInput));
alert(whatIsTheNumber(numInput));

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor (randomColor) {
  if (randomColor === 'blue') {
    return 'The sky is blue';
  } else if (randomColor === 'red') {
    return 'Blood is red.';
  } else if (randomColor === 'cyan') {
    return 'Cyan is a weird color.';
  } else {
    return 'Please enter either blue, red, or cyan.';
  }
}
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var color = prompt('Please enter your favorite color');
var colorPrompt = prompt('Please choose between the colors of Blue, Red, or Cyan as your favorite.');
function switchColor (colorPrompt) {
  switch (colorPrompt) {
    case 'red':
      alert(colorPrompt + ' blood makes the green grass grow');
      return 'red';
    case 'blue':
      alert('The sky is ' + colorPrompt);
      return 'blue';
    case 'cyan':
      alert('What is ' + colorPrompt + '?');
      return 'cyan';
    default:
      alert('Please choose between blue, red, or cyan.');
      return 'Please choose between blue, red, or cyan.';
  }
}

console.log(switchColor(colorPrompt));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
alert(analyzeColor(colorPrompt));
console.log(analyzeColor(colorPrompt));

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var luckyNum = Math.floor(Math.random() * 6);

console.log(luckyNum);

var discountLevel = 0;
function discount (luckyNum) {
  if (luckyNum === 0) {
    return (discountLevel += 0);
  } else if (luckyNum === 1) {
    return (discountLevel += 15 / 100);
  } else if (luckyNum === 2) {
    return (discountLevel += 25 / 100);
  } else if (luckyNum === 3) {
    return (discountLevel += 35 / 100);
  } else if (luckyNum === 4) {
    return (discountLevel += 50 / 100);
  }
  return (discountLevel += 1);
}

console.log(discount(luckyNum));

var totalPrice = prompt('Please enter your total.');

function calculateTotal (discountLevel, totalPrice) {
  var costBeforeDisc = parseInt(totalPrice);
  var totalCost = totalPrice - (discountLevel * totalPrice);
  if (typeof parseInt(totalPrice) === 'number' && parseInt(totalPrice) > 0) {
    return 'Your lucky number is ' + luckyNum + '. Your total before discount is $' + costBeforeDisc + '. Your discount is ' + (discountLevel * 100) + '%! Your total due is $' + totalCost.toFixed(2) + '.';
  }
  return 'Please enter a price above $0.00';
}

console.log(calculateTotal(discountLevel, 'g'));
alert(calculateTotal(discountLevel, totalPrice));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);


// Bonus Problems

function dayOfWeekStartsWithT (str) {
  return (typeof str === 'string' && str.startsWith('T'));
}

console.log(dayOfWeekStartsWithT('Tuesday'));
console.log(dayOfWeekStartsWithT('Saturday'));

function isPalindrome (str) {
  var wordLength = Math.floor(str.length / 2);
  for (var i = 0; i < wordLength; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function isValidPassword (password) {
  return (password.length === 6 && (/^[a-zA-Z0-9]+$/g).test(password) && !isPalindrome(password));
}

console.log(isValidPassword('ffggff'));
