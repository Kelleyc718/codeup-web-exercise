// problem 2 - Returns an array containing all the whole
// numbers between START and END.
// Input = 2 Integers
// Output = Array of WHOLE Integers
function range (start, end) {
  var myArr = []
  for (var i = start; i < end; i++) {
    myArr.push(i)
  }
  return myArr
}

console.log(range(1, 10))
