'use strict';


// $('h1').click(
  // function (e) {
    // $(event.target).toggleClass('higlight');
  // }
// );

$('p').dblclick(
  function (e) {
    if ($(this).css('fontSize') == '16px') {
      $(this).css('font-size', '24px');
    } else {
    $(this).css('fontSize', '16px');
    }
  }
);

// $('li').hover(function (e) {
  // $(this).css('color', 'red');
// }, function () {
  // $(this).css('color', 'black');
// }
// );
