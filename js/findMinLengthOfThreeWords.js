function findMinLengthOfThreeWords (word1, word2, word3) {
  var words = [word1, word2, word3]
  var shortest = words[0].length
  for (var i = 0; i < words.length; i++) {
    if (words[i].length <= shortest) {
      shortest = words[i]
    }
  }
  return shortest.length
}
var output = findMinLengthOfThreeWords('abcd', 'bedd', 'seed')
console.log(output) // --> 1
