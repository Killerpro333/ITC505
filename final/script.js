let moves = 0;
const MAX_MOVES = 20;
const board = document.getElementById('board');
const squares = [];

let timerInterval;
let seconds = 0;
let minutes = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  document.getElementById('timer').innerText = `${formattedMinutes}:${formattedSeconds}`;
}

function stopTimer() {
  clearInterval(timerInterval);
}

function toggleSquare(index) {
  moves++;
  document.getElementById('moveCount').innerText = moves;

  const row = Math.floor(index / 5);
  const col = index % 5;
  const adjacentSquares = [
    index,       // The clicked square
    index - 5,   // Above
    index + 5,   // Below
    index - 1,   // Left
    index + 1,   // Right
  ];

  adjacentSquares.forEach((adjacentIndex) => {
    if (adjacentIndex >= 0 && adjacentIndex < 25) {
      const adjRow = Math.floor(adjacentIndex / 5);
      const adjCol = adjacentIndex % 5;
      if (index === adjacentIndex || (Math.abs(row - adjRow) + Math.abs(col - adjCol) === 1)) {
        squares[adjacentIndex].classList.toggle('is-off');
      }
    }
  });
}

function checkGameState() {
  const isWin = squares.every((square) => square.classList.contains('is-off'));
  if (isWin) {
    displayWin();
  } else if (moves >= MAX_MOVES) {
    displayLoss();
  }
}

function displayWin() {
  stopTimer();
  window.alert(`Congratulations! You won in ${moves} moves and ${document.getElementById('timer').innerText}!`);
}

function displayLoss() {
  stopTimer();
  window.alert(`Game over! You reached the maximum of ${MAX_MOVES} moves.`);
}

function newGame() {
  moves = 0;
  document.getElementById('moveCount').innerText = moves;
  resetBoard();
  stopTimer();
  seconds = 0;
  minutes = 0;
  document.getElementById('timer').innerText = '00:00';
  startTimer();
}

function resetBoard() {
  squares.forEach((square) => {
    const randomState = Math.random() < 0.5;
    if (randomState) {
      square.classList.add('is-off');
    } else {
      square.classList.remove('is-off');
    }
  });
}

for (let i = 0; i < 25; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  squares.push(square);
  board.appendChild(square);

  square.addEventListener('click', () => {
    toggleSquare(i);
    checkGameState();
  });
}

newGame();
