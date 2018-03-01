function listNames (arr) {
  return (arr.length === 2 || arr.length > 2) ? arr.map(list => list.name).splice(-2, 0, '&').join(', ') : arr.map(list => list.name).join(' & ');
}

console.log(listNames([ {name: 'Bart'}, {name: 'Lisa'} ]));
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''
