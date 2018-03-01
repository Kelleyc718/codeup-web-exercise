const average = (arr, testVar) => {
  return arr.forEach(el => el * testVar);
};

let myArr = [1, 2, 3, 4];
console.log(average(myArr, 5));
