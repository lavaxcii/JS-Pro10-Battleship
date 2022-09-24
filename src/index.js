import './styleV.css';
import gameLoop from './mainGameLoop';
import uiElements from './uiElements';

// window.gameLoop = gameLoop
uiElements.createElement('div', 'mainMenuContainer', null, '.content', 1);
uiElements.createElement('button', 'startBtn', null, '.mainMenuContainer', 1);
uiElements.textContentForElement('.startBtn', 'START GAME');
gameLoop.generateGameElements();


