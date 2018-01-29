var username = document.forms.login.username;
var password = document.forms.login.password;
// Username and Password Length Validation
var passLen = password.length >= 5;
var nameLen = username.length < 20;

// Username and Password does not include invalid chars
var passName = !password.includes(username);
var whiteSpace = !username.startsWith(' ') && !password.startsWith(' ') && !username.endsWith(' ') && !password.startsWith(' ');

// Const Variable to test all cases defined above
const valid = passLen && passName && nameLen && whiteSpace;

function validation (username, password) {
  return (valid === true) ? 'success' : 'denied';
}

console.log(validation(username, password));
