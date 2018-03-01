function removeOddValues (obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] % 2 !== 0) {
      delete obj[key]
    }
  })
  return obj
}
