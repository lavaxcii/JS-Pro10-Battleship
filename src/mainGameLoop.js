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

  // add turn logic

  return { humanPlayer, aiPlayer, aiPlacementLoop }
})();

export default gameLoop;