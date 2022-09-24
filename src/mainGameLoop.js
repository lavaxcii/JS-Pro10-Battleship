import Player from "./playerGen"
import uiElements from './uiElements';

const gameLoop = (() => {

  // here should be conditional which upon new game or restart game declares again
  // these same variables with same assigment
  // and second case should be continuance of game with adding scores to players and
  // reseting game boards for new game

  let humanPlayer = Player('HUMAN');
  let aiPlayer = Player('HAL3000');

  const aiPlacementLoop = function() {
    do {
      aiPlayer.gameBoard.placeShipOnSqr(aiPlayer.westByNorthAi(), aiPlayer.directionOfPlacementAi(), aiPlayer.shipNameAi());
    } while (aiPlayer.gameBoard.shipsData.some(function(ship) {
      return ship.shipPlacedOnBoard === false
    }))
  };

  const playerPlacementLoop = function() {
    if (humanPlayer.gameBoard.shipsData.some(function(ship) {
      return ship.shipPlacedOnBoard === false
    })) {
      do {
        humanPlayer.gameBoard.placeShipOnSqr(humanPlayer.westByNorthAi(), humanPlayer.directionOfPlacementAi(), humanPlayer.shipNameAi());
      } while (humanPlayer.gameBoard.shipsData.some(function(ship) {
        return ship.shipPlacedOnBoard === false
      }));
    };
    uiElements.setAttribute('.aiGrid', 'style', 'pointer-events: all')
  };

  const turnLogic = function() {
    console.log('HUMAN GONNA GITH IT! YAH MAN!')
    let coordinate;
    do {
      coordinate = humanPlayer.westByNorthAi();
    } while (document.querySelector(`.humanWestByNorth${coordinate}`) === null);
    let playerHitSquare = document.querySelector(`.humanWestByNorth${coordinate}`);
    console.log('HAL choose random number: ' + coordinate)
    console.log('HAL is targeting: ' + playerHitSquare)
    humanPlayer.gameBoard.recieveAttack(coordinate, playerHitSquare);
  }
  let clickedValue;
  let clickedSquare;
  const generateGameElements = function () {
    document.querySelector('.startBtn').addEventListener('click', () => {
      document.querySelector('.mainMenuContainer').remove();

      uiElements.createElement('div', 'scoreDiv', null, '.content', 1);
      uiElements.createElement('p', 'playerScore', null, '.scoreDiv', 1);
      uiElements.textContentForElement('.playerScore', '0');
      uiElements.createElement('p', 'aiScore', null, '.scoreDiv', 1);
      uiElements.textContentForElement('.aiScore', '0');

      uiElements.createElement('button', 'rndShipPlacementBtn', null, '.scoreDiv', 1);
      uiElements.textContentForElement('.rndShipPlacementBtn', 'RND SHIP PLACEMENT');
      uiElements.createElement('button', 'newRoundBtn', null, '.scoreDiv', 1);
      uiElements.textContentForElement('.newRoundBtn', 'NEW ROUND');
      uiElements.createElement('button', 'quitGameBtn', null, '.scoreDiv', 1);
      uiElements.textContentForElement('.quitGameBtn', 'QUIT GAME');

      uiElements.createElement('div', 'gridDiv', null, '.content', 1);
      uiElements.createElement('div', 'playerGrid', null, '.gridDiv', 1);
      uiElements.createElement('div', 'humanSquare', 'humanPlayer', '.playerGrid', 100);
      for (let i = 1; i <= 100; i++) {
        document.querySelector(`.humanSquare${i}`).addEventListener('click', (clicked) => {
          clickedValue = parseInt(clicked.srcElement.innerText);
          clickedSquare = clicked.originalTarget.classList[1];
          document.querySelector(`.${clickedSquare}`).setAttribute('style', 'border: solid 2px red');
          document.querySelector('.inputForm').setAttribute('style', 'display: visible');
        });
        uiElements.textContentForElement(`.humanSquare${i}`, `${humanPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`);
      };
      uiElements.createElement('div', 'aiGrid', null, '.gridDiv', 1);
      uiElements.createElement('div', 'aiSquare', 'aiPlayer', '.aiGrid', 100);
      for (let i = 1; i <= 100; i++) {
        document.querySelector(`.aiSquare${i}`).addEventListener('click', (clicked) => {
          const aiHitSquare = document.querySelector(`.${clicked.originalTarget.classList[1]}`)
          aiPlayer.gameBoard.recieveAttack(parseInt(clicked.srcElement.innerText), aiHitSquare)
        });
        uiElements.textContentForElement(`.aiSquare${i}`, `${aiPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`);
      };

      // here be form for ship placement, but maybe put in the middle of player grid
      // albeit invisible and only when square is clicked is made visible
      // and when player confirms input it goes out invisible againe
      // should add no possibility to attack ai until all ships are placed on player booard
      // see how to disable events on elements, you already did that in some earlier projects
      uiElements.createElement('form', 'inputForm', null, '.playerGrid', 1)
      uiElements.setAttribute('.inputForm', 'style', 'display: none', 'action', '', null, null)

      // uzmi od clicked value za kooridinatu i to ćeš prosljediti u placeShipOnSqr

      uiElements.createElement('label', 'choiceTwo', null, '.inputForm', 1)
      uiElements.textContentForElement('.choiceTwo', 'Direction (N, S, W, E):');
      uiElements.createElement('input', 'inputNorth', null, '.inputForm', 1)
      uiElements.setAttribute('.inputNorth', 'type', 'radio', 'value', 'north', 'name', 'choiceTwo', null, null)
      uiElements.createElement('input', 'inputSouth', null, '.inputForm', 1)
      uiElements.setAttribute('.inputSouth', 'type', 'radio', 'value', 'south', 'name', 'choiceTwo', null, null)
      uiElements.createElement('input', 'inputWest', null, '.inputForm', 1)
      uiElements.setAttribute('.inputWest', 'type', 'radio', 'value', 'west', 'name', 'choiceTwo', null, null)
      uiElements.createElement('input', 'inputEast', null, '.inputForm', 1)
      uiElements.setAttribute('.inputEast', 'type', 'radio', 'value', 'east', 'name', 'choiceTwo', null, null)

      uiElements.createElement('label', 'choiceThree', null, '.inputForm', 1)
      uiElements.textContentForElement('.choiceThree', `Size (SmallShip, MediumShip, LargeShip)`);
      uiElements.createElement('input', 'inputSS', null, '.inputForm', 1)
      uiElements.setAttribute('.inputSS', 'type', 'radio', 'value', 'SmallShip', 'name', 'choiceThree', null, null)
      uiElements.createElement('input', 'inputMS', null, '.inputForm', 1)
      uiElements.setAttribute('.inputMS', 'type', 'radio', 'value', 'MediumShip', 'name', 'choiceThree', null, null)
      uiElements.createElement('input', 'inputLS', null, '.inputForm', 1)
      uiElements.setAttribute('.inputLS', 'type', 'radio', 'value', 'LargeShip', 'name', 'choiceThree', null, null)

      // add safeguard when all players ships are places manually or with random button ++
      // add highligh when square for manual placement is clicked


      uiElements.createElement('button', 'confirmInputBtn', null, '.inputForm', 1);
      uiElements.setAttribute('.confirmInputBtn', 'type',  'button', null, null, null, null, null, null)
      uiElements.textContentForElement('.confirmInputBtn', 'Confirm');
      document.querySelector('.confirmInputBtn').addEventListener('click', () => {
        const direction = document.querySelector('input[name="choiceTwo"]:checked');
        const shipSize = document.querySelector('input[name="choiceThree"]:checked')
        document.querySelector('.inputForm').setAttribute('style', 'display: none')
        document.querySelector(`.${clickedSquare}`).setAttribute('style', 'border: solid 2px rgb(114, 123, 20)');
        humanPlayer.gameBoard.placeShipOnSqr(clickedValue,  direction.value, shipSize.value);
        if (humanPlayer.gameBoard.shipsData.every(function(ship) {
          // it doesn't work as intended in plaxeShipOnSqr method
          return ship.shipPlacedOnBoard === true
        })) {
          console.log('Brah')
          uiElements.setAttribute('.aiGrid', 'style', 'pointer-events: all')
        }
        clickedValue = null;
        clickedSquare = null;
      });

      document.querySelector('.quitGameBtn').addEventListener('click', () => {
        document.querySelector('.scoreDiv').remove();
        document.querySelector('.gridDiv').remove();
        uiElements.createElement('div', 'mainMenuContainer', null, '.content', 1);
        uiElements.createElement('button', 'startBtn', null, '.mainMenuContainer', 1);
        uiElements.textContentForElement('.startBtn', 'START GAME');
        humanPlayer = Player('HUMAN');
        aiPlayer = Player('HAL3000');
        gameLoop.generateGameElements();
      });

      document.querySelector('.rndShipPlacementBtn').addEventListener('click', () => {
        playerPlacementLoop()
      });

      document.querySelector('.newRoundBtn').addEventListener('click', () => {
        for (let i = 1; i <= 100; i++) {
          uiElements.textContentForElement(`.humanSquare${i}`, `${humanPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`);
          uiElements.setAttribute(`.humanSquare${i}`, 'style', 'color: white')
        };
        for (let i = 1; i <= 100; i++) {
          uiElements.textContentForElement(`.aiSquare${i}`, `${aiPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`);
          uiElements.setAttribute(`.aiSquare${i}`, 'style', 'color: white')
        };
        humanPlayer.generateNewGameBoard('HUMAN')
        aiPlayer.generateNewGameBoard('HAL3000')
        aiPlacementLoop();
        uiElements.setAttribute('.aiGrid', 'style', 'pointer-events: none');
      });

      aiPlacementLoop();
      uiElements.setAttribute('.aiGrid', 'style', 'pointer-events: none');
    });
  };
  

  return { humanPlayer, aiPlayer, aiPlacementLoop, playerPlacementLoop, turnLogic, generateGameElements }
})();

export default gameLoop;

// BUT next first thing is to put in event for start btn aiShip placement ++
// and enable player manual ship placement on its board or via rnd ship placement btn
// and until all ships are placed player cant attack ai grid, enabled only after placement
// and, of cource, make it all visible to player

// add new round UI functionality
  // should reset player and ai grid
  // should give blank grid for player and set enemy ships
// add visible changes on player and ai grid at each turn
  // should set player ships visible on board while ai ships are not visible until hit
// add message to player informing about (mis)hit or getting (mis)hit
// add visible score change in round and game is continued
// add quit game where players are reset
// add button for random ship placement for player ++
// round end should declare that all ship are sunk and maybe 'freeze' board functionality
// and at round end player should choose restart round or quit
// round end should be triggered from checkShipSunkStatus from player gameboard

// vidi kako ustvari možeš prikazati classListu u konzoli
