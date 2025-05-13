let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function renderBoard() {
  const boardDiv = document.getElementById("board");
  boardDiv.innerHTML = "";
  board.forEach((cell, i) => {
    const cellDiv = document.createElement("div");
    cellDiv.className = "cell";
    cellDiv.textContent = cell;
    cellDiv.onclick = () => handleMove(i);
    boardDiv.appendChild(cellDiv);
  });
}

function handleMove(index) {
  if (!gameActive || board[index]) return;
  board[index] = currentPlayer;
  renderBoard();
  if (checkWin()) {
    document.getElementById("status").textContent = `${currentPlayer} wins!`;
    gameActive = false;
  } else if (!board.includes("")) {
    document.getElementById("status").textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  const winCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winCombos.some(c => board[c[0]] && board[c[0]] === board[c[1]] && board[c[0]] === board[c[2]]);
}

renderBoard();
