'use strict';

// Display a multiplication table of input num
function showMultiplicationTable (num) {
  var productTable = '';
  for (let i = 1; i <= 10; i++) {
    productTable = num + ' x ' + i + ' = ' + (num * i);
    console.log(productTable);
  }
  return 'Check Console';
}

console.log(showMultiplicationTable(7));

// Log a random number between 20 and 200 based on x iterations
function oddOrEven (numOfIterations) {
  for (let i = 1; i <= numOfIterations; i++) {
    var randomNum = Math.floor(Math.random() * 20) + 150;
    console.log(randomNum + ((randomNum % 2 === 0) ? ' is Even' : ' is Odd'));
  }
  return 'Complete';
}

console.log(oddOrEven(10));

// Create a incremental number pyramid
function numPyramid (num) {
  for (let i = 1; i <= num; i++) {
    console.log(i.toString().repeat(i));
  }
  return 'Complete';
}

console.log(numPyramid(10));

// Countdown by five logging every multiple of five
function countdownByFive (num) {
  for (let i = num; i >= 0; i -= 5) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
  return 'Complete';
}

console.log(countdownByFive(100));
