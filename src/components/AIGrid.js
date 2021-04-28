import React from "react";
//import shipList from "../data/enemyShipList.json";
//import gameboard from "../facts/gameboard.js";

const AIGrid = () => {
  const alpha = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];

  /**
   * see PlayerGrid.js
   * 
   * Everything's pretty much the same except these coordinates need to be randomly placed. Use some Math.random up in here.
   * 
   * Try to make sure ships never overlap. Same on Grid & PlayerGrid.
   */

  return(
    <div className="grid aiGrid">
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

export default AIGrid;