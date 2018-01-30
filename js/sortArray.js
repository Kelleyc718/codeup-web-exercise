function sortArray (array) {
  var odd = array.filter(num => num % 2).sort((a, b) => a - b);
  return array.map((num) => num % 2 ? odd.shift() : num);
}

console.log(sortArray([47, 9, 1, 5, 2, 6, 18, 49]));
