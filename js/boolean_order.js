var s = 'ttfftff';
var ops = '|&^&&';

function splitter (str) {
  var booArr = str.split('');
  return booArr;
}

var myArr = splitter(s);
console.log(myArr);

function booAssign (myArr) {
  var newArr = [];
  for (var i = 0; i < myArr.length; i++) {
    (myArr[i] === 't') ? newArr.push(true) : newArr.push(false);
  }
  return newArr;
}

var booVals = booAssign(myArr);

console.log(booVals);

function opSplitter (ops) {
  var opsArr = ops.split('');
  return opsArr;
}

var opsArr = opSplitter(ops);

console.log(opsArr);

function opConversion (opsArr) {
  for (var i = 0; i < opsArr.length; i++) {
    if (opsArr[i] === '|') {

    }
  }
}
