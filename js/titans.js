function titanAttack (att, def, yourElement, theirElement) {
  let strongElement = {Fire: 'Earth', Earth: 'Thunder', Water: 'Fire', Thunder: 'Water'};
  let weakElement = {Fire: 'Water', Earth: 'Fire', Water: 'Thunder', Thunder: 'Earth'};
  let damage = def - att * (strongElement[yourElement] === theirElement ? 1.5 : yourElement === theirElement || weakElement[yourElement] === theirElement ? 0.5 : 1);
  return [damage, damage > 0 ? 'Run!' : 'Attack'];
}

// Fire > Earth < Water and Wind
// Earth > Thunder < Fire and Earth
// Water > Fire < Earth and Wind
// Thunder > Water < Fire and Earth

// fire = [0] earth = [1] wind = [2] water = [3]
