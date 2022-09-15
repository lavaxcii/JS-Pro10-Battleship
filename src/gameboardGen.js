import Ship from './shipGen';

const GameBoard = () => {
  let smallShipsData = [];
  let mediumShipsData = [];
  let largeShipsData = [];

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

  return { smallShipsData, mediumShipsData, largeShipsData, generateShips }
};

export default GameBoard;
