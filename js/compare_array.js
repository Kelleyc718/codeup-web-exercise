function solve (a, b) {
  var arrCount = [];
  // Find matches of arrayB in arrayA
  // Increment counter on matches
  // Place incremental counter into new array
  for (var j = 0; j < b.length; j++) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
      if (a[i] === b[j]) {
        count++;
      }
    }
    arrCount.push(count);
  }
  return arrCount;
}

var a = ['abc', 'abc', 'xyz', 'abcd', 'cde'];
var b = ['abc', 'cde', 'uap'];

console.log(solve(a, b));
