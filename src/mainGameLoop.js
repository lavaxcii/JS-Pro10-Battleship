import Player from "./playerGen"

const gameLoop = (() => {
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
  

  return { humanPlayer, aiPlayer, aiPlacementLoop, playerPlacementLoop, turnLogic }
})();

export default gameLoop;

// add to turn logic check if all enemy/ally ships are sunk
// add endgame where score is added to winner and game contiuned with same players
// add possibility to restart game