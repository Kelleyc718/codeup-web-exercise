function isOldEnoughToDrive (age) {
  // Input should equal a number
  // if age is true
  // than isOldEnoughToDrive = true
  var legalAgeToDrive = 16;
  // we want to test if user input === number
  return (age >= legalAgeToDrive) ? true : 'Please enter a number.';
}

console.log(isOldEnoughToDrive('potato'));
