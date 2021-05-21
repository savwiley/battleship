import React, { useEffect } from "react";
import shipList from "../data/shipList.json";

const PlayerGrid = () => {
  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  //this logic places player ships on player grid when game starts
  const takenCoords = [];

  shipList.map((e) => {
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

  return (
    <div className="grid playerGrid">
      {alpha.map((i) =>
        alpha.map((e) => (
          <div
            className="square"
            id={e + alpha.indexOf(i)}
            key={e + alpha.indexOf(i)}
          ></div>
        ))
      )}
    </div>
  );
};

export default PlayerGrid;
