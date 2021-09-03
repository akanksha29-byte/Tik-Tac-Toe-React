import { useState } from "react";
import Board from "./components/Board";
import calcWinner from "./helperMethod";
import "./styles.css";

const App = () => {
  const squares = document.querySelectorAll(".square");
  const [moves, setMoves] = useState(new Array(9).fill(null));
  const [currentPlayerX, setCurrentPlayerX] = useState(true);
  const [winner, setWinner] = useState("");
  const handleClick = (btn) => {
    if (currentPlayerX === true) {
      btn.innerText = "X";
      moves[btn.id] = "X";
      setCurrentPlayerX(false);
    } else {
      btn.innerText = "O";
      moves[btn.id] = "O";
      setCurrentPlayerX(true);
    }
    btn.disabled = true;
    let result = calcWinner(moves);

    if (result !== null) {
      setWinner(result);

      for (let i = 0; i < squares.length; i++) {
        squares[i].disabled = true;
      }
      setTimeout(resetGame, 3000);
    }

    if (result === null && !moves.includes(null)) {
      setWinner("Draw");
      setTimeout(resetGame, 3000);
    }
  };

  const resetGame = () => {
    setMoves(new Array(9).fill(null));
    setWinner("");
    setCurrentPlayerX(true);
    for (let i = 0; i < squares.length; i++) {
      squares[i].disabled = false;
      squares[i].innerText = "";
    }
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Board square={moves} handleClick={handleClick} />
      {winner !== "" ? (
        <p className="results">
          {winner !== "Draw" ? `Congratulations ${winner} wins` : `${winner}!`}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
export default App;
