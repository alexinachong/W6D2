const View = require ('./ttt-view');
const Game = require ('/Users/appacademy/Desktop/W6D2/skeleton/solution/game');

$( () => {
  let game = new Game();
  let containerEl = $('.ttt');

  let view = new View(game, containerEl);
});
