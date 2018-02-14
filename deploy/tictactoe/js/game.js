'use strict';
var cells = $('.cell');
var playerOne = [];
var playerTwo = [];

let count = 0;

cells.click(function () {
  if ($(this).html() !== '') {
    alert('That Move is invalid');
  } else {
    playerMove($(this));
  }
});


const playerMove = player => {
  return (count % 2 !== 0) ? ($(this).html('O'), playerTwo.push($(this).data('num')), count++, clickCount(count)) : ($(this).html('X'), playerOne.push($(this).data('num')), count++, clickCount(count));
};

const clickCount = count => {
  if (count === 9) {
    draw(count);
  }
};

const draw = count => {
  return (count === 9 && !win()) ? console.log('Draw') : null;
};
const win = (playerOne, playerTwo) => {
  switch (playerOne || playerTwo === 15) {
    case cells += (parseInt(cells[0]) +
                  parseInt(cells[1]) +
                  parseInt(cells[2])) :
      break;
    case cells += (parseInt(cells[3]) +
                  parseInt(cells[4]) +
                  parseInt(cells[5])) :
      break;
    case cells += (parseInt(cells[6]) +
                  parseInt(cells[7]) +
                  parseInt(cells[8])) :
      break;
  }
};
