import React, { useEffect } from "react";
import shipList from "../data/shipList.json";
//import gameboard from "../facts/gameboard.js";

const PlayerGrid = () => {
  const alpha = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];

  //this logic places player ships on player grid when game starts
  const takenCoords = [];

  shipList.map(e => {
    for (let i = 0; i < e.length; i++) {
      takenCoords.push(e.coords[i]);
    }
    return takenCoords;
  });

  useEffect(() => {
    for (let i = 0; i < takenCoords.length; i++) {
      const square = document.querySelector(`#${takenCoords[i]}`);
      if (square) {
        square.classList.toggle("placed");
      }
    }
  });

  /**
   * Now figure out how the computer plays. See Game.js where random funcs are held. Consider putting them in their own file for ease of access.
   */

  return(
    <div className="grid playerGrid">
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
};

export default PlayerGrid;






  /**
   * Run through the shipList array to find all of the coords arrays.
   * 
   * shipList.map(e => do something with e.coords)
   * 
   * Take all of the coordinates as those squares IDs and input dots on those squares. Also add a class to those squares indicating it's an unhit ship. Perhaps "unhit".
   * 
   * Maybe I can concat all of the arrays.
   * 
   * shipList.map(e => coords[...coords, e.coords]);
   * 
   * ?? eh???
   */