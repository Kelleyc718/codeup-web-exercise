function removeArrayValues(obj) {
  Object.keys(obj).forEach(key => {
    if (Array.isArray(obj[key])) {
      delete obj[key]
    }
  })
  return obj
}
