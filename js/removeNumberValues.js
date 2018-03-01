function removeNumberValues (obj) {
  Object.keys(obj).forEach(key => {
    if (Number.isInteger(obj[key])) {
      delete obj[key]
    }
  })
  return obj
}

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
}
removeNumberValues(obj)
console.log(obj) // --> { b: 'remaining' }
