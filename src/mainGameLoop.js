import Player from "./playerGen"

const gameLoop = (() => {
// if (player clicked start) {
//  onda zoveš ship i game board i pakuješ u dvije varijable 1player 2aiplayer 
//  s time da Player FF ustvari već ima u sebi poziv na shipGen i gameboardGen
// }

  const humanPlayer = Player('HUMAN');
  const aiPlayer = Player('HAL3000');

  const message = function() {
    console.log('I function, God Almighty, Testisticulata Ultima!')
  }
  // turn logic
  return { message, humanPlayer, aiPlayer }
})();

export default gameLoop;

// add rng ai
// add rng logic for ship placement for ai
// ai should happen instant after player has set updater
// but for testing purposes it will be other way around