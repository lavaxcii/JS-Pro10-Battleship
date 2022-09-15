const Ship = (shipSizeLength, shipNrForName, shipNr) => {
  let name = `${shipNrForName}`;
  let shipLength = shipSizeLength;
  let shipIndex = shipNr - 1;
  let location = [];

  const getLength = function() {
    return this.shipLength;
  };

  const hit = function() {
    this.shipLength -= 1;
  };

  const isSunk = function() {
    if (this.shipLength === 0) {
      console.log(`${this.name} is sunk!`);
    } else {
      console.log(`${this.name} is ALIVE!`);
    };
  };

  return { name, shipLength, shipIndex, location, getLength, isSunk, hit }
}

export default Ship;


// ovdje je gameStart btn click gdje se onda putem Ship FFa naprave 
// objekt brodovi svih veličina i spakuju u shipsData gdje se onda
// kada player stisne na gameSqr ponudi mu se koji brod može postaviti
// i onda mu ponudi u kojem smjeru ga uopće (ne)može postaviti s obzirom na dužinu
// i na prisustvo drugih brodova