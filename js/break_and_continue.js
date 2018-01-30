function oddNumPrinter () {
  let num = parseInt(prompt('Please enter an odd number between 1 and 50'));
  while (true) {
    if (num > 0 && num < 50 && num % 2 !== 0) {
      break;
    }
    num = parseInt(prompt('Please enter an odd number between 1 and 50'));
    continue;
  }
  console.log('Number to skip is: ' + num);
  for (let i = 0; i < 50; i++) {
    if (!(i % 2)) {
      continue;
    }
    if (i === num) {
      console.log('Yikes! Skipping number: ' + num);
      continue;
    }
    console.log('Here is an odd number: ' + i);
  }
  return 'Complete';
}

oddNumPrinter();
