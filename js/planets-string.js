(function () {
  'use strict';

  var planetsString = 'Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune';
  var planetsArray;

  // TODO: Convert planetsString to an array, save it to planetsArray.
  planetsArray = planetsString.split('|');
  console.log(planetsArray);

  // TODO: Create a string with <br> tags between each planet. console.log() your results.
  planetsArray.join('<br>');
  //       Why might this be useful?

  // Bonus: Create a second string that would display your planets in an undordered list.
  //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
  //        console.log() your results.
  planetsArray.unshift('<ul>');
  planetsArray.push('</ul>');
  for (var i = 1; i < planetsArray.length - 1; i++) {
    var str = '';
    str += '<li>' + planetsArray[i] + '</li>';
    console.log(str);
  }
})();
