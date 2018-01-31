function whoIsPaying (name) {
  return (name.length >= 2) ? ([name, name.substr(0, 2)]) : [name];
}

console.log(whoIsPaying('Melanie'));

function getHighestNumber (num1, num2, num3) {
  return (isNaN(parseInt(num1), parseInt(num2), parseInt(num3))) ? false : Math.max(parseInt(num1), parseInt(num2), parseInt(num3));
}
console.log(getHighestNumber(9, 3, -20));
