import './styleV.css';
import gameLoop from './mainGameLoop';

window.aiGameBoardSqrs = gameLoop.aiPlayer.gameBoard.gameBoardSqrs
window.playerGameBoardSqrs = gameLoop.humanPlayer.gameBoard.gameBoardSqrs
window.gameLoop = gameLoop

// gameLoop.message();

// const playerGameBoard = GameBoard(); 
// const aiGameBoard = GameBoard();

// playerGameBoard.generateShips();
// console.table(playerGameBoard.shipsData)
// playerGameBoard.checkSunkStatus();
// console.table(playerGameBoard.mediumShipsData)
// console.table(playerGameBoard.largeShipsData)

// playerGameBoard.generateSquares();
// console.table(playerGameBoard.gameBoardSqrs)
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr(11, 'east', 'SmallShip')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr(14, 'east', 'SmallShip')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr(17, 'east', 'SmallShip')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr(21, 'east', 'SmallShip')

// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('13')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('15')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('16')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('17')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('18')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('110')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('21')

// gameLoop.aiPlayer.gameBoard.recieveAttack(21)
gameLoop.aiPlacementLoop();
gameLoop.playerPlacementLoop();

console.table(gameLoop.aiPlayer.gameBoard.gameBoardSqrs)
console.table(gameLoop.humanPlayer.gameBoard.gameBoardSqrs)

gameLoop.aiPlayer.gameBoard.recieveAttack(26)

// console.table(gameLoop.humanPlayer)
// gameLoop.aiPlayer.gameBoard.recieveAttack(11)

// console.table(gameLoop.aiPlayer.gameBoard.gameBoardSqrs)
// console.table(gameLoop.aiPlayer.gameBoard.shipsData)

// console.log(gameLoop.aiPlayer.determineShipPlacementForAi(gameLoop.aiPlayer.rndNrAi(10, 1)))
// console.log(gameLoop.aiPlayer.determineShipPlacementForAi(gameLoop.aiPlayer.rndNrAi(10, 1)))
// console.log(gameLoop.aiPlayer.determineShipPlacementForAi(gameLoop.aiPlayer.rndNrAi(10, 1)))









