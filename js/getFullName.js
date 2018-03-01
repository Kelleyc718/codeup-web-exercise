// problem 3 - Returns a person's full name
// Input - Obj
// Output - String
function getFullName (person) {
  for (var prop in person['name']) {
    if (person['name'].prop === undefined) {
      delete person['name'].prop
    }
  }
  return person
}

var person = {
  name: {
    first: 'Alyssa',
    last: 'Hacker'
  },
  age: 26
}
console.log(getFullName(person))
