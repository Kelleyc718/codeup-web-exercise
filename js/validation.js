(function () {
  'use strict';

  function validate () {
    let usrName = document.forms.login.username.value;
    let psw = document.forms.login.password.value;
    // Username and Password Length Validation
    var passLen = psw.length >= 5;
    var nameLen = usrName.length < 20;
    if ((usrName.length && psw.length < 0)) {
      alert('Both fields must be filled out.');
    }
    var passName = !psw.includes(usrName);
    var whiteSpace = !usrName.startsWith(' ') && !psw.startsWith(' ') &&
    !usrName.endsWith(' ') && !psw.startsWith(' ');
    if (passLen && nameLen && passName && whiteSpace) {
      return true;
    }
  }

  var modal = document.querySelector('.loginModal');
  var trigger = document.querySelector('.loginBtn');
  var closeButton = document.querySelector('#cancel');

  function toggleModal () {
    modal.classList.toggle('show-modal');
  }

  function windowOnClick (event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  trigger.addEventListener('click', toggleModal);
  closeButton.addEventListener('click', toggleModal);
  window.addEventListener('click', windowOnClick);
})();
