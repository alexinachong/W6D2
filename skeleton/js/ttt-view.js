class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
      const $currentTarget = $(event.currentTarget);
      // this.game.playMove($cell.data("pos"));
      this.makeMove($currentTarget);
      console.log(event);
    });
  }

  makeMove($square) {
    let currentPlayer = this.game.currentPlayer;
    this.game.playMove($square.data("pos"));
    // console.log(currentPlayer);
    $square.addClass(currentPlayer);
    $square.addClass('clicked');
    $square.text(currentPlayer);

    if (this.game.winner()) {
      this.$el.append(`Congratulations, ${currentPlayer}, you win!`);
    }
  }

  setupBoard() {
    let $ul = $("<ul>");
    $ul.addClass("group");

    for (let rowI = 0; rowI < 3; rowI++) {
      for (let colI = 0; colI < 3; colI++) {
        let $li = $("<li>");
        $li.data("pos", [rowI, colI]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
