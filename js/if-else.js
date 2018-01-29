"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];
console.log(color)

var favorite = 'blue'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.
if (color === 'red') {
  console.log('The stop sign is ' + color)
} else if (color === 'orange') {
  console.log(color + ' is the color of a great fruit')
} else if (color === 'yellow') {
  console.log('The scared cat is ' + color)
} else if (color === 'green') {
  console.log('The color of envy is ' + color)
} else if (color === 'blue') {
  console.log('The sky is ' + color)
} else {
  console.log('I do not know anything by that color.')
}

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

var favColor = (color === 'blue') ? console.log('This is my favorite color') : console.log('I don\'t like this color');
