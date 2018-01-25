function whoIsPaying (name) {
  return (name.length >= 2) ? ([name, name.substr(0, 2)]) : [name];
}

console.log(whoIsPaying('Melanie'));
