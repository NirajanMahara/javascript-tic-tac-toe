export default class GameView {
  constructor() {
    console.log('💻 init GameView 💥');
  }

  updateBoard(game) {
    console.log('🎁 This board is within GameView 💻');
    console.log(game.board);

    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board__tile[data-index='${i}']`);
      console.log(tile);
      tile.textContent = game.board[i];
    }
  }
}
