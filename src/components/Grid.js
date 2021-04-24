import React, { useCallback } from "react";
//import gameboard from "../facts/gameboard.js";

const Grid = () => {

  const alpha = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];

  const square = document.querySelectorAll(".square");
  //const grid = document.querySelector(".grid");


  useCallback(() => {
      console.log(square);
      square.map(e => {
        e.style.background = "red";
        if (e.class !== "missed") {
          e.id.split(",");
          e.addEventListener("click", () => {
            //gameboard(`ship`, `action`, e.id[0], e.id[1]);
            console.log("I work!");
          })
        }
      }
    )
  }, [ square ],)

  //Line 14:20:  Array.prototype.map() expects a return value from arrow function
  //https://reactjs.org/docs/hooks-reference.html

  /*
  if (grid && square) {
    console.log(square);
    square.map(e => {
      e.style.background = "red";
      if (e.class !== "missed") {
        e.id.split(",");
        e.addEventListener("click", () => {
          //gameboard(`ship`, `action`, e.id[0], e.id[1]);
          console.log("I work!");
        })
      }
    }
  )}
  */
  
  

  //^^^ have to figure out how to define ship and action

  //https://css-tricks.com/snippets/css/complete-guide-grid/

  //I need to create a 10x10 grid where each block is clickable and has a unique coordinate.

  // x = A-E; y = 1-5
  // x left/right (letters), y up/down (numbers)

  return (
    <div className="grid" style={{
      display: "grid",
      width: "500px",
      height: "500px",
      gridTemplateColumns: "repeat(10, 1fr)",
      gridTemplateRows: "repeat(10, 1fr)",
      border: "1px solid black",
    }}>
      {alpha.map(i =>
        alpha.map(e =>
          <div 
            className="square"
            id={e + alpha.indexOf(i)}
            key={e + alpha.indexOf(i)}
            style={{
              border: "1px solid black",
              cursor: "pointer",
            }}>
          </div>
        )
      )}
    </div>
  )
}

export default Grid;