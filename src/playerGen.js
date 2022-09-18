import GameBoard from './gameboardGen'

const Player = (message) => {
  let score = 0;

  const gameBoard = GameBoard();
  gameBoard.generateShips();
  gameBoard.generateSquares();

  const toConsole = function() {
    console.log('Hey sexy, it\'' + message)
  }
  return { score, gameBoard, toConsole }
}

export default Player;