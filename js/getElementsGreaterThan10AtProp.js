function getElementsGreaterThan10AtProperty (obj, key) {
  if (Array.isArray(obj[key])) {
    return obj[key].filter(prop => prop > 10);
  }
  return [];
}

var obj = {
  key: [1, 20, 30]
};

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
