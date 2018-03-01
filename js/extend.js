function extend (obj1, obj2) {
  for (var i = 0; i < obj2.length; i++) {
    if (obj1[i] === undefined) {
      obj1[i] = obj2[i]
    }
  }
}
var obj1 = {
  a: 1,
  b: 2
}
var obj2 = {
  b: 4,
  c: 3
}

extend(obj1, obj2)

console.log(obj1) // --> {a: 1, b: 2, c: 3}
console.log(obj2) // --> {b: 4, c: 3}
