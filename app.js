document.addEventListener('DOMContentLoaded', function () {
  createBoard(64);
  console.log('Hi');
});

function createBoard(size) {
  let board = document.querySelector('.board');

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numGrids = size * size;

  for (let i = 0; i < numGrids; i++) {
    let grid = document.createElement('div');
    board.insertAdjacentElement('beforeend', div);
  }
}
