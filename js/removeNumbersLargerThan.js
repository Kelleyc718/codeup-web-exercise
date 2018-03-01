function removeNumbersLargerThan (num, obj) {
  for (var prop in obj) {
    if (obj[prop] > num) {
      delete obj[prop]
    }
  }
}
