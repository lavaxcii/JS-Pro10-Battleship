import Ship from './shipGen';

const GameBoard = () => {
  let smallShipsData = [];
  let mediumShipsData = [];
  let largeShipsData = [];
  let gameBoardSqrs = [];

  const Squares = function(westNr, northNr) {
    let west = westNr;
    let north = northNr;
    let shipAtLocation = '';

    return { west, north, shipAtLocation }
  }

  // razmisli da bude jedinstvena koordinata i da umjesto
  // northNumbera bude slovo
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
      }
    };
  };

  const generateShips = function() {
    let shipNr = 0;
    for (let i = 1; i <= 3; i++) {
      shipNr += 1;
      smallShipsData.push(Ship(2, `SmallShip${shipNr.toString()}`, shipNr));
    };
    (shipNr > 0) ? shipNr = 0 : null;

    for (let i = 1; i <= 3; i++) {
      shipNr += 1;
      mediumShipsData.push(Ship(3, `MediumShip${shipNr.toString()}`, shipNr));
    };
    (shipNr > 0) ? shipNr = 0 : null;

    for (let i = 1; i <= 1; i++) {
      shipNr += 1;
      largeShipsData.push(Ship(5, `LargeShip${shipNr.toString()}`, shipNr));
    };
  };

  const recieveAttack = function() {
    // takes coord and determens if ship is hit or not
    // 
  }

  return { smallShipsData, mediumShipsData, largeShipsData, gameBoardSqrs, generateShips, generateSquares }
};

export default GameBoard;
