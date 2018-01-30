function beerSong () {
  let i = 99;
  while (i > 0) {
    if (i === 1) {
      console.log(i + ' bottle of beer on the wall. ' + i + ' bottle of beer. Take it down, pass it around. ' + (i - 1) + ' bottle of beer on the wall.');
      break;
    }
    console.log(i + ' bottles of beer on the wall. ' + i + ' bottles of beer. Take one down, pass it around. ' + (i - 1) + ' bottles of beer on the wall.');
    i--;
  }
  return 'All Done!';
}

console.log(beerSong());

function fizzBuzz (num) {
  let i = 1;
  while (i <= num) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3) {
      console.log('Fizz');
    }
    console.log(i);
    i++;
  }
}

console.log(fizzBuzz(1000));
