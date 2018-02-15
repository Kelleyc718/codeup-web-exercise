(function () {
  'use strict';
  var cells = $('.cell');
  var playerOne = 1;
  var cpu = 2;
  var board = {};
  board.state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  board.empty = 0;
  var win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  function moves () {
    var movesPlayed = [];
    console.log(movesPlayed);
    for (let i = 0; i < 9; i++) {
      if (board.state[i] === board.empty) {
        movesPlayed.push(i);
      }
    }
    return movesPlayed;
  }

  let count = 0;
  const turn = function () {
    if (count % 2 === 0) {
      return playerOne;
    }
    return cpu;
  };

  function full () {
    for (let i = 0; i < 9; i++) {
      return (board.state[i] === board.empty);
    }
  }

  function checkWin () {
    for (var i = 0; i < 9; i++) {
      var a = board.state[win[i][0]];
      console.log(a);
      var b = board.state[win[i][1]];
      console.log(b);
      var c = board.state[win[i][2]];
      console.log(c);
      if (a === b && a === c && a !== board.empty) {
        alert('Player ' + a + ' wins!');
      }
    }
    return board.empty;
  }

  cells.click(function () {
    if (turn() === playerOne) {
      $(this).html('X');
      board.state[($(this).data('num'))] = 1;
      $(this).off('click');
      count++;
    } else {
      $(this).html('O');
      board.state[($(this).data('num'))] = 2;
      $(this).off('click');
      count++;
    }
    checkWin();
  });
})();
