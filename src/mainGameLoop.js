import Player from "./playerGen"

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
  

  return { humanPlayer, aiPlayer, aiPlacementLoop, playerPlacementLoop, turnLogic }
})();

export default gameLoop;

// add endgame where score is added to winner and game contiuned with same players
// endgame should be triggered from checkShipSunkStatus from player gameboard
// add possibility to restart game