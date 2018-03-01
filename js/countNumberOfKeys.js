function countNumberOfKeys (obj) {
  for (var i = 0; i < Object.values(obj).length; i++) {
    console.log(Object.values(obj)[i])
  }
}

var obj = {
  a: {
    name: 'booger'
  },
  b: {
    name: 'booger1'
  },
  c: {
    name: 'booger2'
  }
}

var output = countNumberOfKeys(obj)
console.log(output) // --> 3
