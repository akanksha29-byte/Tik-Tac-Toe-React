import React from "react";
import Square from "./Square";

const Board = ({ square, handleClick }) => {
  return (
    <div className="board">
      {square.map((i, index) => {
        return <Square index={index} key={index} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default Board;
