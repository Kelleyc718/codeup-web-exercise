const helloPerson = name => {
  return 'Hello, ' + name;
};

function oppositeDay(Boolean) {
  return !Boolean
}

function get10thLetter(str) {
  return str.charAt(9)
}

function indexesOnly(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr.indexOf(arr[i])
  }
  return arr
}

function myLaptopInfo() {
  var mac = {
    type: 'Macbook Pro',
    color: 'Space Gray',
    yearPurchased: '2017'
  }
  return mac
}

function sayFavoriteFood (obj) {
  return obj['name'] + '\'s favorite food is ' + obj['favoriteFood']
}
