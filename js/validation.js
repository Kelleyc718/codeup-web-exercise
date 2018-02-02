(function () {
  'use strict';
  function validate () {
    var usrName = document.forms.login.username.value;
    var psw = document.forms.login.password.value;
    // Username and Password Length Validation
    var passLen = psw.length >= 5;
    var nameLen = usrName.length < 20;
    if ((usrName && psw === '')) {
      alert('Both fields must be filled out.');
    }
    var passName = !psw.includes(usrName);
    var whiteSpace = !usrName.startsWith(' ') && !psw.startsWith(' ') && !usrName.endsWith(' ') && !psw.startsWith(' ');
    if (passLen && nameLen && passName && whiteSpace) {
    }
  }
})();
