(function () {
  'use strict';
  var names = ['Chris', 'Nicole', 'Riley', 'Jaxson'];
  console.log(names.length);
    // For loop iteration.
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
  // forEach loop using fat arrow notation.
  names.forEach(el => console.log(el));
})();
