function removeStringValues (obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'string') {
      delete obj[key]
    }
  })
  return obj
}

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj)
console.log(obj) // { age: 20 }
