(function () {
  'use strict';

  // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
  var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Jupiter'];

    // function for logging the planets array
  function logPlanets () {
    console.log('Here is the list of planets:');
    console.log(planets);
    console.log('---- ---- ---- ----');
  }

  logPlanets();
  console.log('Adding "The Sun" to the beginning of the planets array.');
  // TODO: Read the console.log() statement above. Write code to perform thestep it describes.
  logPlanets(planets.unshift('The Sun'));

  console.log('Adding "Pluto" to the end of the planets array.');
  // TODO: Read the console.log() statement above. Write code to perform thestep it describes.
  logPlanets(planets.push('Pluto'));

  console.log('Removing "The Sun" from the beginning of the planets array.');
  // TODO: Read the console.log() statement above. Write code to perform thestep it describes.
  logPlanets(planets.shift('The Sun'));

  console.log('Removing "Pluto" from the end of the planets array.');
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  logPlanets(planets.pop('Pluto'));

  console.log('Finding and logging the index of "Earth" in the planets array.');
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  console.log('Earth is ' + (planets.indexOf('Earth') + 1) + 'rd in order of the planets.');

  console.log('Using splice to remove the planet after "Earth".');
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  logPlanets(planets.splice(3, 1));

  console.log('Using splice to add back the planet after "Earth".');
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  logPlanets(planets.splice(planets.indexOf('Earth') + 1, 0, 'Mars'));

  console.log('Reversing the order of the planets array.');
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  logPlanets(planets.reverse());

  console.log('Sorting the planets array.');
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  logPlanets(planets.sort());
})();
