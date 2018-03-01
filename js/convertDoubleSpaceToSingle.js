function convertDoubleSpaceToSingle (str) {
  var newStr = str.split('  ')
  return newStr.join(' ')
}
var output = convertDoubleSpaceToSingle('string  with  double  spaces')
console.log(output) // --> 'string with double spaces'
