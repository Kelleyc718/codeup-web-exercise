function joinThreeArrays (arr1, arr2, arr3) {
  var a = arr1
  var b = arr2
  var c = arr3
  var d = a.concat(b, c)
  return d
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6])
console.log(output) // --> [1, 2, 3, 4, 5, 6]
