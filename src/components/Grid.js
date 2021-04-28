import React, { useEffect } from "react";
import gameboard from "../facts/gameboard.js";

const Grid = (props) => {
  const { place, ship } = props;

  const alpha = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];

  useEffect(() => {
    const square = Array.from(document.querySelectorAll(".square"));
    const grid = document.querySelector(".grid");

    const changeSquare = (e) => {
      gameboard(ship.current, place.current, e.id);
    };

    if (grid && square) {
      square.map(e => {
        return e.addEventListener("click", () => {
          changeSquare(e);
        });
      });
    };
  });

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