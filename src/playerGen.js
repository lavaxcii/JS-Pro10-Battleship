import GameBoard from './gameboardGen'

const Player = (name) => {
  let score = 0;
  let playerName = name;

  const rndNrAi = function (upperLimit, inclusiveOrNot) {
    return Math.floor(Math.random() * upperLimit) + inclusiveOrNot;
  };

  const westByNorthAi = function() {
    return parseInt(rndNrAi(10, 1).toString() + rndNrAi(10, 1).toString());
  };
  const directionOfPlacementAi = function() {
    let directionOfPlacementArray = ['north', 'south', 'east', 'west'];
    return directionOfPlacementArray[rndNrAi(4, 0)];
  };
  const shipNameAi = function() {
    let shipNameArray = ['SmallShip', 'MediumShip', 'LargeShip'];
    return shipNameArray[rndNrAi(3, 0)]
  };

  const gameBoard = GameBoard(`${name}`);
  gameBoard.generateShips();
  gameBoard.generateSquares();

  return { score, westByNorthAi, directionOfPlacementAi, shipNameAi, gameBoard, playerName }
}

export default Player;