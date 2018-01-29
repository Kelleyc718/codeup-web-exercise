function dayOfWeekStartsWithT (str) {
  return (typeof str === 'string' && str.startsWith('T'));
}

console.log(dayOfWeekStartsWithT('Tuesday'));
console.log(dayOfWeekStartsWithT('Saturday'));

function isPalindrome (str) {
  var wordLength = Math.floor(str.length / 2);
  for (var i = 0; i < wordLength; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function isValidPassword (password) {
  return (password.length === 6 && (/^[a-zA-Z0-9]+$/g).test(password) && !isPalindrome(password));
}

console.log(isValidPassword('ffggff'));
