export default class GameView {
  updateBoard(game) {
    this.updateTurn(game);
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board__tile[data-index='${i}']`);

      let tileType = game.board[i] == 'X' ? 'tile-x' : 'tile-o';

      tile.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ' '
      }</span>`;
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector('.player-x');
    let playerO = document.querySelector('.player-o');

    playerX.classList.remove('active');
    playerO.classList.remove('active');

    if (game.turn == 'X') {
      playerX.classList.add('active');
    } else {
      playerO.classList.add('active');
    }
  }
}
