let shipsData = [];

const Ship = (nrSmallShips, nrMediumShips, nrLargeShips) => {
  let length;
  let location = [];

  const hit = () => {
    return this.length = this.length - 1;
    // this.location[coord];
  };

  const isSunk = () => {
    if (this.length === 0) {
      return alert(`${this.name} is sunk!`)
    };
  };

  const smallShip = () => {
    length = 3;
    for (let i = 1; i <= nrSmallShips; i++) {
      shipsData.push({ 
        name: `SmallShip${i}`,
        length: length,
        location: location,
        hit: hit,
        isSunk: isSunk
        })
    }
  }

  let mediumShip = () => {

  }

  let largeShip = () => {

  }

  return { smallShip }
}

module.exports = { Ship, shipsData };


// ovdje je gameStart btn click gdje se onda putem Ship FFa naprave 
// objekt brodovi svih veličina i spakuju u shipsData gdje se onda
// kada player stisne na gameSqr ponudi mu se koji brod može postaviti
// i onda mu ponudi u kojem smjeru ga uopće (ne)može postaviti s obzirom na dužinu
// i na prisustvo drugih brodova