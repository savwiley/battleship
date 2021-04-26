import React, { useEffect } from "react";
import gameboard from "../facts/gameboard.js";

const Grid = () => {

  const alpha = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];

  useEffect(() => {
    const square = Array.from(document.querySelectorAll(".square"));
    const grid = document.querySelector(".grid");

    const changeSquare = (e) => {
      gameboard(`ship`, `action`, e.id);
    };
    //^^^ have to figure out how to define ship and action

    if (grid && square) {
      square.map(e => {
        return e.addEventListener("click", () => {
          changeSquare(e);
        });
      });
    };
  });

  // x = A-E; y = 1-5
  // x left/right (letters), y up/down (numbers)

  return (
    <div className="grid">
      {alpha.map(i =>
        alpha.map(e =>
          <div 
            className="square"
            id={e + alpha.indexOf(i)}
            key={e + alpha.indexOf(i)}>
          </div>
        )
      )}
    </div>
  )
}

export default Grid;