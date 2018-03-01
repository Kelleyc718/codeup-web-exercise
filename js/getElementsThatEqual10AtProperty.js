function getElementsThatEqual10AtProperty (obj, key) {
  if (Array.isArray(obj[key])) {
    var myInputs = obj[key].filter(elem => elem === 10)
    return myInputs
  }
  return []
}

var obj = {
  key: [1000, 50, 10, 10]
}
var output = getElementsThatEqual10AtProperty(obj, 'key')
console.log(output) // --> [10, 10]
