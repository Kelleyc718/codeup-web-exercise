const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  (humanYears - 1 ? 16 : 11) + 4 * humanYears,
  (humanYears - 1 ? 14 : 10) + 5 * humanYears];

console.log(humanYearsCatYearsDogYears(7));
