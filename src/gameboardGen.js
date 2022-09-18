import Ship from './shipGen';

const GameBoard = () => {
  let shipsData = [];
  let gameBoardSqrs = [];

  const Squares = function(westNr, northNr) {
    let west = westNr;
    let north = northNr;
    let westByNorth = parseInt(`${westNr}${northNr}`);
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
            shipsData[j].isSunk();
          };
        };
      } else if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].locationHit === false) {
        gameBoardSqrs[i].locationHit = true;
      };
    };
  };

  const placeShipOnSqr = function (coordinates, directionOfPlacement, shipNameSize) {
    const northSouthPlacement = function() {}
    for (let i = 0; i < gameBoardSqrs.length; i++) {
      if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === false) {
        let shipCounter = 1;
        for (let j = 0; j < shipsData.length; j++) {
          // console.log(shipCounter)
          console.log(j)
          console.log(shipsData[j].name)
          console.log(`${shipNameSize}${shipCounter}`)
          console.log('-----------------------------------')
          if (directionOfPlacement === "north") {
            if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `SmallShip${shipCounter}` && gameBoardSqrs[i - 10].north > 0 && gameBoardSqrs[i - 10].shipAnchored === false) {
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 10].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && gameBoardSqrs[i - 10].north > 0 && gameBoardSqrs[i - 10].shipAnchored === false && gameBoardSqrs[i - 20].north > 0 && gameBoardSqrs[i - 20].shipAnchored === false) {
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 20].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 10].shipAnchored = true;
              gameBoardSqrs[i - 20].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `LargeShip${shipCounter}` && gameBoardSqrs[i - 10].north > 0 && gameBoardSqrs[i - 10].shipAnchored === false && gameBoardSqrs[i - 20].north > 0 && gameBoardSqrs[i - 20].shipAnchored === false && gameBoardSqrs[i - 30].north > 0 && gameBoardSqrs[i - 30].shipAnchored === false && gameBoardSqrs[i - 40].north > 0 && gameBoardSqrs[i - 40].shipAnchored === false) {
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 20].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 30].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 40].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 10].shipAnchored = true;
              gameBoardSqrs[i - 20].shipAnchored = true;
              gameBoardSqrs[i - 30].shipAnchored = true;
              gameBoardSqrs[i - 40].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            }
          }
          shipCounter++
          (shipCounter > 3) ? shipCounter = 1 : null;
        }
      } else if (shipsData === null) {
        return;
      }
    }
  };

    // for (let i = 0; i < gameBoardSqrs.length; i++) {
    //   if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === false && shipCounter < 7) {
    //     gameBoardSqrs[i].shipAtLocation = shipsData[shipCounter].name;
    //     gameBoardSqrs[i].shipAnchored = true;
    //     shipCounter++;
    //   };
    // };


  const checkSunkStatus = function() {
    if (shipsData.every(function(ship) {
        return ship.shipLength === 0
    })) {
      console.log('All ships are sunk!')
    } else {
      console.log('Some ships still afloat!')
    };
  };

  return { shipsData, gameBoardSqrs, generateShips, generateSquares, recieveAttack, checkSunkStatus, placeShipOnSqr }
};

export default GameBoard;
