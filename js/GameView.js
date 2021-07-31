export default class GameView {
  constructor() {
    console.log('💻 init GameView 💥');
  }

  updateBoard(game) {
    console.log('🎁 This board is within GameView 💻');
    console.log(game.board);
  }
}
