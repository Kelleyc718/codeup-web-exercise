var random = Math.floor((Math.random() * 50) + 1)
console.log('This is the random number to skip - ' + random)

for (var i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    if (i === random) {
      console.log('Skip this number: ' + random)
      continue
    }
    console.log('Here is an odd number: ' + i)
  }
};
