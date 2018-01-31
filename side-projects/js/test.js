function numPyramid (num) {
  for (let i = 1; i <= num; i++) {
    console.log((!i) ? 1 : '0'.repeat(i));
  }
  return 'Complete';
}

console.log(numPyramid(10));
