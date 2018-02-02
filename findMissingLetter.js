function findMissingLetter (arr) {
  var str = arr.join('');
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
