import Player from "./playerGen"
import uiElements from './uiElements';

const gameLoop = (() => {

  // here should be conditional which upon new game or restart game declares again
  // these same variables with same assigment
  // and second case should be continuance of game with adding scores to players and
  // reseting game boards for new game

  const humanPlayer = Player('HUMAN');
  const aiPlayer = Player('HAL3000');

  const aiPlacementLoop = function() {
    do {
      aiPlayer.gameBoard.placeShipOnSqr(aiPlayer.westByNorthAi(), aiPlayer.directionOfPlacementAi(), aiPlayer.shipNameAi());
    } while (aiPlayer.gameBoard.shipsData.some(function(ship) {
      return ship.shipPlacedOnBoard === false
    }))
  };

  const playerPlacementLoop = function() {
    do {
      humanPlayer.gameBoard.placeShipOnSqr(humanPlayer.westByNorthAi(), humanPlayer.directionOfPlacementAi(), humanPlayer.shipNameAi());
    } while (humanPlayer.gameBoard.shipsData.some(function(ship) {
      return ship.shipPlacedOnBoard === false
    }))
  };

  const turnLogic = function() {
    console.log('HUMAN GONNA GITH IT! YAH MAN!')
    humanPlayer.gameBoard.recieveAttack(humanPlayer.westByNorthAi());
  }

  const generateGameElements = function () {
    document.querySelector('.startBtn').addEventListener('click', () => {
      document.querySelector('.mainMenuContainer').remove();

      uiElements.createElement('div', 'scoreDiv', null, '.content', 1);
      uiElements.createElement('p', 'playerScore', null, '.scoreDiv', 1);
      uiElements.textContentForElement('.playerScore', '0');
      uiElements.createElement('p', 'aiScore', null, '.scoreDiv', 1);
      uiElements.textContentForElement('.aiScore', '0');

      uiElements.createElement('button', 'restartRoundBtn', null, '.scoreDiv', 1);
      uiElements.textContentForElement('.restartRoundBtn', 'RESTART ROUND');
      uiElements.createElement('button', 'quitGameBtn', null, '.scoreDiv', 1);
      uiElements.textContentForElement('.quitGameBtn', 'QUIT GAME');

      uiElements.createElement('div', 'gridDiv', null, '.content', 1);
      uiElements.createElement('div', 'playerGrid', null, '.gridDiv', 1);
      uiElements.createElement('div', 'square', 'humanPlayer', '.playerGrid', 100);
      for (let i = 1; i <= 100; i++) {
        uiElements.textContentForElement(`.square${i}`, `${humanPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`);
      };
      uiElements.createElement('div', 'aiGrid', null, '.gridDiv', 1);
      uiElements.createElement('div', 'aiSquare', 'aiPlayer', '.aiGrid', 100);
      for (let i = 1; i <= 100; i++) {
        uiElements.textContentForElement(`.aiSquare${i}`, `${aiPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`);
      };

      document.querySelector('.quitGameBtn').addEventListener('click', () => {
        document.querySelector('.scoreDiv').remove();
        document.querySelector('.gridDiv').remove();
        uiElements.createElement('div', 'mainMenuContainer', '.content', 1);
        uiElements.createElement('button', 'startBtn', '.mainMenuContainer', 1);
        uiElements.textContentForElement('.startBtn', 'START GAME');
        gameLoop.generateGameElements();
      });

      //restart button
    });
  };
  

  return { humanPlayer, aiPlayer, aiPlacementLoop, playerPlacementLoop, turnLogic, generateGameElements }
})();

export default gameLoop;

// add endgame where score is added to winner and game contiuned with same players
// endgame should be triggered from checkShipSunkStatus from player gameboard
// add possibility to restart game