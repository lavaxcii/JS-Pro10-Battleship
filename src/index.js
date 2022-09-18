import './styleV.css';
import gameLoop from './mainGameLoop';

// window.shipsData = shipsData

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
gameLoop.aiPlayer.gameBoard.placeShipOnSqr(16, 'west', 'LargeShip')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('13')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('15')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('16')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('17')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('18')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('110')
// gameLoop.aiPlayer.gameBoard.placeShipOnSqr('21')

// gameLoop.aiPlayer.gameBoard.recieveAttack(21)
gameLoop.aiPlayer.toConsole();
gameLoop.humanPlayer.toConsole();
// gameLoop.aiPlayer.gameBoard.recieveAttack(11)

console.table(gameLoop.aiPlayer.gameBoard.gameBoardSqrs)
console.table(gameLoop.aiPlayer.gameBoard.shipsData)







