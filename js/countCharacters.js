function countAllCharacters (str) {
  var myObj = {} // empty object
  var letters = str.split('')
  for (var i = 0; i < letters.length; i++) {
    if (!myObj.hasOwnProperty(letters[i])) {
      myObj[letters[i]] = 1
    }
    myObj[letters[i]]++
  }
  return myObj
}

var output = countAllCharacters('banana')
console.log(output) // --> {b: 1, a: 3, n: 2}
