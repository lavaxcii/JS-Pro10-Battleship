import './styleV.css';
import GameBoard from './gameboardGen';

// window.shipsData = shipsData

const playerGameBoard = GameBoard();
// const aiGameBoard = GameBoard();

playerGameBoard.generateShips();
console.table(playerGameBoard.smallShipsData)
console.table(playerGameBoard.mediumShipsData)
console.table(playerGameBoard.largeShipsData)

