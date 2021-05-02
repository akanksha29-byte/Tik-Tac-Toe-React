const calcWinner = (moves) => {
  const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningMoves.length; i++) {
    let [a, b, c] = winningMoves[i];
    if (moves[a] != null && moves[a] === moves[b] && moves[a] === moves[c]) {
      return moves[a] === "X" ? "Player1" : "Player2";
    }
  }
  return null;
};

export default calcWinner;
