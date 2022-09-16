import Ship from './shipGen';

const GameBoard = () => {
  let shipsData = [];
  // let smallShipsData = [];
  // let mediumShipsData = [];
  // let largeShipsData = [];
  let gameBoardSqrs = [];

  const Squares = function(westNr, northNr) {
    let west = westNr;
    let north = northNr;
    // should it be stringeth or nay?
    let westByNorth = `${westNr}${northNr}`;
    let shipAtLocation = '';
    let locationHit = false;
    let shipAnchored = false;

    return { west, north, westByNorth, shipAtLocation, locationHit, shipAnchored }
  };

  const generateSquares = function() {
    let westNumber = 1;
    for (let i = 1; i <= 10; i++) {
      gameBoardSqrs.push(Squares(westNumber, i));
      if (i >= 10) {
        westNumber++;
        i = 0;
      };
      if (westNumber === 11) {
        return
      };
    };
  };

  const generateShips = function() {
    let shipNr = 0;
    for (let i = 1; i <= 3; i++) {
      shipNr += 1;
      shipsData.push(Ship(2, `SmallShip${shipNr.toString()}`, shipNr));
    };
    (shipNr > 0) ? shipNr = 0 : null;

    for (let i = 1; i <= 3; i++) {
      shipNr += 1;
      shipsData.push(Ship(3, `MediumShip${shipNr.toString()}`, shipNr));
    };
    (shipNr > 0) ? shipNr = 0 : null;

    for (let i = 1; i <= 1; i++) {
      shipNr += 1;
      shipsData.push(Ship(5, `LargeShip${shipNr.toString()}`, shipNr));
    };
  };

  const recieveAttack = function(coordinates) {
    for (let i = 0; i < gameBoardSqrs.length; i++) {
      if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === true) {
        gameBoardSqrs[i].locationHit = true;
        for (let j = 0; j < shipsData.length; j++) { 
          if (shipsData[j].name === gameBoardSqrs[i].shipAtLocation) {
            shipsData[j].hit();
          };
        };
      } else if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].locationHit === false) {
        gameBoardSqrs[i].locationHit = true;
      };
    };
  };

  const checkSunkStatus = function() {
    if (shipsData.every(function(ship) {
        return ship.shipLength === 0
    })) {
      console.log('All ships are sunk!')
    } else {
      console.log('Some ships still afloat!')
    };
  };

  return { shipsData, gameBoardSqrs, generateShips, generateSquares, recieveAttack, checkSunkStatus }
};

export default GameBoard;
