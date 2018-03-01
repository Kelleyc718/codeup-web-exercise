var ownedCatAndDog = (catYears, dogYears) => [
  (catYears < 24) ? catYears / 15 : (catYears - 16) / 4,
  (dogYears < 24) ? dogYears / 15 : (dogYears - 14) / 5
].map(Math.floor);
