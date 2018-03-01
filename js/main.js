function each (array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i])
  }
}

function sumSquares (numbers) {
  var total = 0
  var myNums = each(numbers, function (x) {
    total += (x * x)
  })
  return total
}

sumSquares(1, 2, 3, 4)



myArr.filter(el, function(x, index)) {

}
