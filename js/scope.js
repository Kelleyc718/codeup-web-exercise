"use strict";

(function greeting () {
  var myNameIs = 'Chris'
  console.log('Hello ' + myNameIs + '.')
})();

(function isOdd () {
  var random = Math.floor((Math.random() * 100) + 1);
  (random % 2 !== 0) ? console.log('This number is odd: ' + random) : console.log('This number is even: ' + random)
})();
