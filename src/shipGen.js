const Ship = (shipSizeLength, shipNrForName, shipNr) => {
  let name = `${shipNrForName}`;
  let shipLength = shipSizeLength;
  let shipPlacedOnBoard = false;

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

  return { name, shipLength, shipPlacedOnBoard, isSunk, hit }
}

export default Ship;