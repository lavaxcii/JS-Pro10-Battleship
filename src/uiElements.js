import gameLoop from './mainGameLoop';

const uiElements = (() => {
  const createElement = function(element, className, specialClassName, querySelector, nrOfElements) {
    for (let i = 1; i <= nrOfElements; i++) {
      const qSelector = document.querySelector(querySelector);
      const createElement = document.createElement(element);
      createElement.classList.add(className);
      createElement.classList.add(className + i);
      if (specialClassName !== null && specialClassName === 'humanPlayer') {
        createElement.classList.add(gameLoop.humanPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth)
      } else if (specialClassName !== null && specialClassName === 'aiPlayer') {
        createElement.classList.add(gameLoop.aiPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth)
      }
      qSelector.appendChild(createElement);
    };
  };

  const textContentForElement = function (querySelector, text) {
    const qSelector = document.querySelector(querySelector)
    qSelector.textContent = text;
  }

  const createGrid = function () {
    for (let i = 1; i <= 99; i++) {
      const createDiv = document.createElement('div');
      createDiv.classList.add(`sqr${i}`);
      divs.appendChild(createDiv);
      console.log('Sqr UI created!')
      addSqrs(`sqr${i}`);
    };
  }

  return { createElement, textContentForElement }
})();


export default uiElements;
