import GameBoard from './gameboardGen'

const Player = (name) => {
  let score = 0;
  let playerName = name;
  
  const updateScore = function() {
    this.score += 1;
    return console.log('SCORE UPDATE!' + this.score);
  }

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

  let gameBoard = GameBoard(`${name}`);
  const generateNewGameBoard = function() {
    this.gameBoard = GameBoard(`${name}`);
  }

  return { playerName, score, updateScore, westByNorthAi, directionOfPlacementAi, shipNameAi, gameBoard, generateNewGameBoard }
}

export default Player;