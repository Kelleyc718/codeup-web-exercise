
/* BONUS 1:
    Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
    Using multiple functions will be helpful.
    input = 5552324343, output = 555-232-4343
    input = 5553434, output = 555-3434
    input = 18005552323, output = 1-800-555-2323

    Extra Challenge: account for invalid characters
    Extra Challenge: if the input is already formatted, output the unformatted version
    Extra Challenge: allow the parser to accept letters and convert them to the correct numbers
BONUS 2:
    Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
        1) Add a student name
        2) Delete a student name
        3) View all student names in alphabetical order
        4) View all student names in reverse alphabetical order
    Store the student names in an array. Account for invalid user input.
*/
function invalidCharCheck (input) {
  return (input.match(/[^a-z0-9#*-]/gi)) ? 'This is not a valid number.' : true;
}

function convertPhoneLetters (input) {
  input = input.toLowerCase();
  var phonenumber = '';
  for (var i = 0; i < input.length; i++) {
    var character = input.charAt(i);

    switch (character) {
      case '0': phonenumber += '0';
        break;
      case '1': phonenumber += '1';
        break;
      case '2': phonenumber += '2';
        break;
      case '3': phonenumber += '3';
        break;
      case '4': phonenumber += '4';
        break;
      case '5': phonenumber += '5';
        break;
      case '6': phonenumber += '6';
        break;
      case '7': phonenumber += '7';
        break;
      case '8': phonenumber += '8';
        break;
      case '9': phonenumber += '9';
        break;

      case 'a': case 'b': case 'c': phonenumber += '2';
        break;
      case 'd': case 'e': case 'f': phonenumber += '3';
        break;
      case 'g': case 'h': case 'i': phonenumber += '4';
        break;
      case 'j': case 'k': case 'l': phonenumber += '5';
        break;
      case 'm': case 'n': case 'o': phonenumber += '6';
        break;
      case 'p': case 'q': case 'r': case 's': phonenumber += '7';
        break;
      case 't': case 'u': case 'v': phonenumber += '8';
        break;
      case 'w': case 'x': case 'y': case 'z': phonenumber += '9';
        break;

      default: phonenumber += character;
    }
  }
  return phonenumber;
}

function numberLengthCheck (input) {
  return (input.length === 1 || 3 || 7 || 10 || 11);
}

function formatCheck (input) {
  return (input.toString().replace(/[-]/gi, ''));
}

function phoneNumberParse (input) {
  var newInput = convertPhoneLetters(input);
  var formInput = formatCheck(newInput);
  if (invalidCharCheck(formInput) && numberLengthCheck(formInput)) {
    if (typeof formInput === 'string' && (formInput.length === 3 || 7 || 10 || 11)) {
      if (formInput.length === 3) {
        return formInput;
      } else if (formInput.length === 7) {
        return formInput.slice(0, 3) + '-' + formInput.slice(3);
      } else if (formInput.length === 10) {
        return formInput.slice(0, 3) + '-' + formInput.slice(3, 6) + '-' + formInput.slice(6);
      } else {
        return formInput.slice(0, 1) + '-' + formInput.slice(1, 4) + '-' + formInput.slice(4, 7) + '-' + formInput.slice(7);
      }
    }
  }
}

console.log(phoneNumberParse('1-415-abc-0259'));
