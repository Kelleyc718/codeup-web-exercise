function select(arr, obj) {
  var newObj = {}
  arr.forEach(function (el) {
    if (obj[el]) {
      newObj[el] = obj[el]
    }
  })
  return newObj
}
