import Ship from './shipGen';
import gameLoop from './mainGameLoop';
import uiElements from './uiElements';

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
  generateSquares()

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
  generateShips()

  const recieveAttack = function(coordinates, targetLocation) {
    for (let i = 0; i < gameBoardSqrs.length; i++) {
      if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === true && gameBoardSqrs[i].locationHit === false) {
        for (let j = 0; j < shipsData.length; j++) { 
          if (shipsData[j].name === gameBoardSqrs[i].shipAtLocation && gameBoardSqrs[i].locationHit === false) {
            gameBoardSqrs[i].locationHit = true;
            shipsData[j].hit();
            shipsData[j].isSunk();
            console.log(`SHOTS FIRED ON US! HIT AT ${gameBoardSqrs[i].westByNorth} ${name}!`);
            (name === 'HAL3000') ? gameLoop.aiPlayer.gameBoard.checkSunkStatus() : null;
            (name === 'HUMAN') ? gameLoop.humanPlayer.gameBoard.checkSunkStatus() : null;
            (name === 'HAL3000') ? targetLocation.setAttribute('style', 'color: red; font-size: 20px') : null;
            (name === 'HAL3000') ? targetLocation.textContent = 'X' : null;
            (name === 'HUMAN') ? targetLocation.setAttribute('style', 'color: red; font-size: 25px') : null;
            (name === 'HUMAN') ? targetLocation.textContent = 'X' : null;
            (name === 'HAL3000') ? gameLoop.turnLogic() : null;
          };
        };
      } else if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === false && gameBoardSqrs[i].locationHit === false) {
        gameBoardSqrs[i].locationHit = true;
        console.log(`SHOTS FIRED ON US! AMISS AT ${gameBoardSqrs[i].westByNorth} ${name}!`);
        (name === 'HAL3000') ? gameLoop.aiPlayer.gameBoard.checkSunkStatus() : null;
        (name === 'HUMAN') ? gameLoop.humanPlayer.gameBoard.checkSunkStatus() : null;
        (name === 'HAL3000') ? targetLocation.setAttribute('style', 'color: red; font-size: 20px') : null;
        (name === 'HUMAN') ? targetLocation.setAttribute('style', 'color: red; font-size: 25px') : null;
        (name === 'HAL3000') ? gameLoop.turnLogic() : null;
      } else if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === false && gameBoardSqrs[i].locationHit === true) {
        (name === 'HUMAN') ? console.log('-------------------------------') : null;
        (name === 'HUMAN') ? console.log('HAL is trying again') : null;
        (name === 'HUMAN') ? console.log('-------------------------------') : null;
        (name === 'HUMAN') ? gameLoop.turnLogic() : null;
      } else if (gameBoardSqrs[i].westByNorth === coordinates && gameBoardSqrs[i].shipAnchored === true && gameBoardSqrs[i].locationHit === true) {
        (name === 'HUMAN') ? console.log('-------------------------------') : null;
        (name === 'HUMAN') ? console.log('HAL is trying again') : null;
        (name === 'HUMAN') ? console.log('-------------------------------') : null;
        (name === 'HUMAN') ? gameLoop.turnLogic() : null;
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
              //UI changes
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `SS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i - 9}`, `SS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i - 9}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 10].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 10].north > 0 && gameBoardSqrs[i - 10].shipAnchored === false && gameBoardSqrs[i - 20].north > 0 && gameBoardSqrs[i - 20].shipAnchored === false) {
              //UI changes
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `MS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i - 9}`, `MS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i - 19}`, `MS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i - 9}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i - 19}`, 'style', 'color: violet');
              };

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
              //UI changes
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i - 9}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i - 19}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i - 29}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i - 39}`, `LS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i - 9}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i - 19}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i - 29}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i - 39}`, 'style', 'color: violet');
              };

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
              //UI changes
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `SS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 11}`, `SS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 11}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 10].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 10].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i + 10].north > 0 && gameBoardSqrs[i + 10].shipAnchored === false && gameBoardSqrs[i + 20].north > 0 && gameBoardSqrs[i + 20].shipAnchored === false) {
              //UI changes
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `MS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 11}`, `MS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 21}`, `MS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 11}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 21}`, 'style', 'color: violet');
              };

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
              //UI changes
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 11}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 21}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 31}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 41}`, `LS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 11}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 21}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 31}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 41}`, 'style', 'color: violet');
              };

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
              //UI changes
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `SS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 2}`, `SS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 2}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i + 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i + 1].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i].lastRowSquare !== true && gameBoardSqrs[i + 1].lastRowSquare !== true && gameBoardSqrs[i + 1].shipAnchored === false && gameBoardSqrs[i + 2].shipAnchored === false) {
              //UI changes
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `MS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 2}`, `MS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 3}`, `MS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 2}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 3}`, 'style', 'color: violet');
              };

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
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 2}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 3}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 4}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i + 5}`, `LS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 2}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 3}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 4}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i + 5}`, 'style', 'color: violet');
              };

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
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `SS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i}`, `SS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i}`, 'style', 'color: violet');
              };

              shipsData[j].shipPlacedOnBoard = true;
              gameBoardSqrs[i].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i - 1].shipAtLocation = shipsData[j].name;
              gameBoardSqrs[i].shipAnchored = true;
              gameBoardSqrs[i - 1].shipAnchored = true;
              j = 0;
              shipCounter= 1;
              return;
            } else if (shipsData[j].name === `${shipNameSize}${shipCounter}` && shipsData[j].name === `MediumShip${shipCounter}` && shipsData[j].shipPlacedOnBoard === false && gameBoardSqrs[i - 1].lastRowSquare !== true && gameBoardSqrs[i - 2].lastRowSquare !== true && gameBoardSqrs[i - 1].shipAnchored === false && gameBoardSqrs[i - 2].shipAnchored === false) {
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `MS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i}`, `MS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i - 1}`, `MS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i - 1}`, 'style', 'color: violet');
              };

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
              if (name === 'HUMAN') {
                uiElements.textContentForElement(`.humanSquare${i + 1}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i - 1}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i - 2}`, `LS${shipCounter}`);
                uiElements.textContentForElement(`.humanSquare${i - 3}`, `LS${shipCounter}`);
                uiElements.setAttribute(`.humanSquare${i + 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i - 1}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i - 2}`, 'style', 'color: violet');
                uiElements.setAttribute(`.humanSquare${i - 3}`, 'style', 'color: violet');
              };

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
            };
          };
          shipCounter++
          (shipCounter > 3) ? shipCounter = 1 : null;
        };
      } ;
    };
  };

  const checkSunkStatus = function() {
    if (shipsData.every(function(ship) {
        return ship.shipLength === 0
    })) {
      if (name === 'HAL3000') {
        uiElements.createElement('p', 'sunkStatusMessage', null, '.gridDiv', 1);
        uiElements.textContentForElement('.sunkStatusMessage', `${name} is LOSER`)
        setTimeout(() => {
          document.querySelector('.sunkStatusMessage').remove();
        }, 3000);
        gameLoop.aiPlayer.updateScore();

        uiElements.textContentForElement('.playerScore', `${gameLoop.aiPlayer.score}`);
        uiElements.setAttribute('.aiGrid', 'style', 'pointer-events: none');
      } else if (name === 'HUMAN') {
        uiElements.createElement('p', 'sunkStatusMessage', null, '.gridDiv', 1);
        uiElements.textContentForElement('.sunkStatusMessage', `${name} is LOSER`)
        setTimeout(() => {
        document.querySelector('.sunkStatusMessage').remove();
        }, 3000);
        gameLoop.humanPlayer.updateScore();
        uiElements.textContentForElement('.aiScore', `${gameLoop.humanPlayer.score}`);
        uiElements.setAttribute('.aiGrid', 'style', 'pointer-events: none');
      }
      console.log('All ships are sunk!')
      // možda alert gdje biraš restart ili quit
    } else {
      console.log('Some ships still afloat!')
      // ništa
    };
  };

  return { shipsData, gameBoardSqrs, generateShips, generateSquares, recieveAttack, checkSunkStatus, placeShipOnSqr }
};

export default GameBoard;
