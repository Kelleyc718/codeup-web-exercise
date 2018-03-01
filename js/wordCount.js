function countWords (sentence) {
  if (sentence.length === 0) {
    return {}
  }

  var words = getWords(sentence)

  var wordCount = {}

  for (var i = 0; i < words.length; i++) {
    var word = words[i]
    if (wordCount[word] === undefined) {
      wordCount[word] = 1
    } else {
      wordCount[word]++
    }
  }
  return wordCount
}

function getWords (sentence) {
  return sentence.split(' ')
};

console.log(countWords('a b c d e'))
