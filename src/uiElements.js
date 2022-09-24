import gameLoop from './mainGameLoop';

const uiElements = (() => {
  const createElement = function(element, className, specialClassName, querySelector, nrOfElements) {
    for (let i = 1; i <= nrOfElements; i++) {
      const qSelector = document.querySelector(querySelector);
      const createElement = document.createElement(element);
      createElement.classList.add(className);
      createElement.classList.add(className + i);
      if (specialClassName !== null && specialClassName === 'humanPlayer') {
        createElement.classList.add(`humanWestByNorth${gameLoop.humanPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`)
      } else if (specialClassName !== null && specialClassName === 'aiPlayer') {
        createElement.classList.add(`aiWestByNorth${gameLoop.aiPlayer.gameBoard.gameBoardSqrs[i - 1].westByNorth}`)
      }
      qSelector.appendChild(createElement);
    };
  };

  const textContentForElement = function (querySelector, text) {
    const qSelector = document.querySelector(querySelector)
    qSelector.textContent = text;
  };

  const setAttribute = function(selector, setAttribute1, att1Value, setAttribute2, att2Value, setAttribute3, att3Value ) {
    const qSelector = document.querySelector(selector);
    qSelector.setAttribute(setAttribute1, att1Value);
    (setAttribute2 !== null) ? qSelector.setAttribute(setAttribute2, att2Value) : null;
    (setAttribute3 !== null) ? qSelector.setAttribute(setAttribute3, att3Value) : null;
  };

  return { createElement, textContentForElement, setAttribute }
})();


export default uiElements;
