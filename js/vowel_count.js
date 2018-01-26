function getCount (str) {
  var vowelsCount = 0;
  // enter your majic here
  var vowelList = 'aeiou';
  for (var i = 0; i < str.length; i++){
    if (vowelList.indexOf(str[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

var myStr = 'abracadabra';
console.log(getCount(myStr));
