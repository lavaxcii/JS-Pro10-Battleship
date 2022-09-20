import Ship from './shipGen';
import gameLoop from './mainGameLoop';

const GameBoard = (name) => {
  let shipsData = [];
  let gameBoardSqrs = [];

  const Squares = function(westNr, northNr, lastSquare) {
    let west = westNr;
    let north = northNr;
    let westByNorth = parseInt(`${westNr}${northNr}`);
    let shipAtLocation = '';
    let locationHit = false;
    let shipAnchored = false;
    let lastRowSquare = lastSquare;

    return { west, north, westByNorth, shipAtLocation, locationHit, shipAnchored, lastRowSquare }
  };

  const generateSquares = function() {
    let westNumber = 1;
    let lastRowSquare = false;
    for (let i = 1; i <= 10; i++) {
      gameBoardSqrs.push(Squares(westNumber, i, lastRowSquare));
      lastRowSquare = false;
      (i === 9) ? lastRowSquare = true : null;
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
      if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === true && gameBoardSqrs[i].locationHit === false) {
        gameBoardSqrs[i].locationHit = true;
        for (let j = 0; j < shipsData.length; j++) { 
          if (shipsData[j].name === gameBoardSqrs[i].shipAtLocation) {
            shipsData[j].hit();
            shipsData[j].isSunk();
            console.log(`SHOTS FIRED ON US! HIT AT ${gameBoardSqrs[i].westByNorth} ${name}!`);
            (name === 'HAL3000') ? gameLoop.turnLogic() : null;
          };
        };
      } else if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].locationHit === false) {
        gameBoardSqrs[i].locationHit = true;
        console.log(`SHOTS FIRED ON US! AMISS AT ${gameBoardSqrs[i].westByNorth} ${name}!`);
        (name === 'HAL3000') ? gameLoop.turnLogic() : null;
      };
    };
  };

  const placeShipOnSqr = function (coordinates, directionOfPlacement, shipNameSize) {
    for (let i = 0; i < gameBoardSqrs.length; i++) {
      if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === false) {
        let shipCounter = 1;
        for (let j = 0; j < shipsData.length; j++) {
          if (directionOfPlacement === "north") {

            // safeguard against invalid placement and to inform user about it
            if ((coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `SmallShip${shipCounter}` && gameBoardSqrs[i].west === 1) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `MediumShip${shipCounter}` && (gameBoardSqrs[i].west === 1 || gameBoardSqrs[i].west === 2)) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `LargeShip${shipCounter}` && (gameBoardSqrs[i].west === 1 || gameBoardSqrs[i].west === 2 || gameBoardSqrs[i].west === 3 || gameBoardSqrs[i].west === 4))) {
              console.log('DAMN brah!')
              return;
            }

            if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `SmallShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 10].north > 0 && gameBoardSqrs[i - 10].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 10].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 10].north > 0 && gameBoardSqrs[i - 10].shipAnchored === false && gameBoardSqrs[i - 20].north > 0 && gameBoardSqrs[i - 20].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 20].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 10].shipAnchored = true;
              gameBoardSqrs[i - 20].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `LargeShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 10].north > 0 && gameBoardSqrs[i - 10].shipAnchored === false && gameBoardSqrs[i - 20].north > 0 && gameBoardSqrs[i - 20].shipAnchored === false && gameBoardSqrs[i - 30].north > 0 && gameBoardSqrs[i - 30].shipAnchored === false && gameBoardSqrs[i - 40].north > 0 && gameBoardSqrs[i - 40].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
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
          } else if (directionOfPlacement === "south") {

            // safeguard against invalid placement and to inform user about it
            if ((coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `SmallShip${shipCounter}` && gameBoardSqrs[i].west === 10) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `MediumShip${shipCounter}` && (gameBoardSqrs[i].west === 10 || gameBoardSqrs[i].west === 9)) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `LargeShip${shipCounter}` && (gameBoardSqrs[i].west === 10 || gameBoardSqrs[i].west === 9 || gameBoardSqrs[i].west === 8 || gameBoardSqrs[i].west === 7))) {
              console.log('DAMN brah!')
              return;
            }

            if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `SmallShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i + 10].north > 0 && gameBoardSqrs[i + 10].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 10].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i + 10].north > 0 && gameBoardSqrs[i + 10].shipAnchored === false && gameBoardSqrs[i + 20].north > 0 && gameBoardSqrs[i + 20].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 20].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 10].shipAnchored = true;
              gameBoardSqrs[i + 20].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `LargeShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i + 10].north > 0 && gameBoardSqrs[i + 10].shipAnchored === false && gameBoardSqrs[i + 20].north > 0 && gameBoardSqrs[i + 20].shipAnchored === false && gameBoardSqrs[i + 30].north > 0 && gameBoardSqrs[i + 30].shipAnchored === false && gameBoardSqrs[i + 40].north > 0 && gameBoardSqrs[i + 40].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 20].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 30].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 40].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 10].shipAnchored = true;
              gameBoardSqrs[i + 20].shipAnchored = true;
              gameBoardSqrs[i + 30].shipAnchored = true;
              gameBoardSqrs[i + 40].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            }
          } else if (directionOfPlacement === "east") {

            // safeguard against invalid placement and to inform user about it
            if ((coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `SmallShip${shipCounter}` && gameBoardSqrs[i].north === 10) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `MediumShip${shipCounter}` && (gameBoardSqrs[i].north === 10 || gameBoardSqrs[i].north === 9)) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `LargeShip${shipCounter}` && (gameBoardSqrs[i].north === 10 || gameBoardSqrs[i].north === 9 || gameBoardSqrs[i].north === 8 || gameBoardSqrs[i].north === 7))) {
              console.log('DAMN brah!')
              return;
            }

            if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `SmallShip${shipCounter}` &&  shipsData[j].shipPlacedOnBoard === false  && gameBoardSqrs[i].lastRowSquare !== true && gameBoardSqrs[i + 1].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 1].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i].lastRowSquare !== true && gameBoardSqrs[i + 1].lastRowSquare !== true && gameBoardSqrs[i + 1].shipAnchored === false && gameBoardSqrs[i + 2].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 2].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 1].shipAnchored = true;
              gameBoardSqrs[i + 2].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `LargeShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i].lastRowSquare !== true && gameBoardSqrs[i + 1].lastRowSquare !== true && gameBoardSqrs[i + 2].lastRowSquare !== true && gameBoardSqrs[i + 3].lastRowSquare !== true && gameBoardSqrs[i + 2].shipAnchored === false && gameBoardSqrs[i + 3].shipAnchored === false && gameBoardSqrs[i + 4].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 2].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 3].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 4].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 1].shipAnchored = true;
              gameBoardSqrs[i + 2].shipAnchored = true;
              gameBoardSqrs[i + 3].shipAnchored = true;
              gameBoardSqrs[i + 4].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            }
          } else if (directionOfPlacement === "west") {

            // safeguard against invalid placement and to inform user about it
            if ((coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `SmallShip${shipCounter}` && gameBoardSqrs[i].north === 1) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `MediumShip${shipCounter}` && (gameBoardSqrs[i].north === 1 || gameBoardSqrs[i].north === 2)) || (coordinates === gameBoardSqrs[i].westByNorth && shipsData[j].name === `LargeShip${shipCounter}` && (gameBoardSqrs[i].north === 1 || gameBoardSqrs[i].north === 2 || gameBoardSqrs[i].north === 3 || gameBoardSqrs[i].north === 4))) {
              console.log('DAMN brah!')
              return;
            }

            if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `SmallShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 1].lastRowSquare !== true && gameBoardSqrs[i - 1].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 1].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 1].lastRowSquare !== true && gameBoardSqrs[i - 2].lastRowSquare !== true && gameBoardSqrs[i - 1].shipAnchored === false && gameBoardSqrs[i - 2].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 2].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 1].shipAnchored = true;
              gameBoardSqrs[i - 2].shipAnchored = true;
              j = 0;
              shipCounter = 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `LargeShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 1].lastRowSquare !== true && gameBoardSqrs[i - 2].lastRowSquare !== true && gameBoardSqrs[i - 3].lastRowSquare !== true && gameBoardSqrs[i - 4].lastRowSquare !== true && gameBoardSqrs[i - 2].shipAnchored === false && gameBoardSqrs[i - 3].shipAnchored === false && gameBoardSqrs[i - 4].shipAnchored === false) {
              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 2].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 3].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 4].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 1].shipAnchored = true;
              gameBoardSqrs[i - 2].shipAnchored = true;
              gameBoardSqrs[i - 3].shipAnchored = true;
              gameBoardSqrs[i - 4].shipAnchored = true;
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
