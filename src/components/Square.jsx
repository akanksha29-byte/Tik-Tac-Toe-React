import React from "react";

const Square = ({ index, handleClick }) => {
  return (
    <button
      id={index}
      className="square"
      onClick={(e) => {
        handleClick(e.target);
      }}
    ></button>
  );
};

export default Square;
