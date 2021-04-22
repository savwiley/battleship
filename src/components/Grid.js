import React from "react";
import gameboard from "../facts/gameboard.js";

const Grid = () => {

  /**
   *  function addSquares(numb) {
          let sum = numb * numb;
          grid.style.gridTemplateColumns = `repeat(${numb}, 1fr)`;
          grid.style.gridTemplateRows = `repeat(${numb}, 1fr)`;
          for (let i = 0; i < sum; i++) {
              const squares = document.createElement("div");
              squares.setAttribute("id", "square");
              squares.addEventListener("mouseover", mouseOver);
              function mouseOver(){
                  squares.style.background = `linear-gradient(120deg, rgb(${rainbow()}), rgb(${rainbow()}))`;
              }
              grid.appendChild(squares);
          } return;
      }
   */

  //I need to create a 10x10 grid where each block is clickable and has a unique coordinate.

  // x = A-E; y = 1-5
  // x left/right (letters), y up/down (numbers)

  return (
    <>
    </>
  )
}

export default Grid;