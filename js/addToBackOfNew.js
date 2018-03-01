const addToBackOfNew = (arr, element) => {
  let newArr = [];
  return newArr.concat(arr, element);
};
let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input);
console.log(output);
