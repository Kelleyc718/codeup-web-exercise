function solve (s) {
  var numArr = s.match(/\d+/g).map(el => parseInt(el));
  return numArr.pop(numArr.sort((a, b) => a - b));
}

console.log(solve('32akfjfj998dakljf9'));
