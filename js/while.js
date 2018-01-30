var count = 2;
while (count < 65537) {
  console.log(count);
  count *= 2;
}

(function letMeGoHome () {
  var allCones = Math.floor(Math.random() * 50) + 50;
  console.log('You must sell ' + allCones + ' to go home!');
  do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    (allCones < conesSold) ? console.log('I cannot sell you that many!') : allCones -= conesSold;
    console.log('Cones sold: ' + conesSold + '\n' + 'Cones remaining: ' + allCones);
  }
  while (allCones > 0);
})();
