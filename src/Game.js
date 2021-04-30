import React, { useEffect } from "react";
//import gameboard from "./facts/gameboard.js";
import shipList from "./data/shipList.json";
import PlayerGrid from "./components/PlayerGrid.js";
import AIGrid from "./components/AIGrid.js";

//this file will be for actually playing the game


//all logic below is for placing PLAYER ships on PLAYER grid

const Game = () => {
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
        console.log("square ran");
        console.log(document.querySelector(`#${takenCoords[i]}`));
        square.classList.toggle("placed");
      } else {
        console.log(takenCoords);
        console.log(document.querySelector(`#${takenCoords[i]}`))
      }
    }
  });

  return (
    <>
      <PlayerGrid />

      <AIGrid />
    </>
  )
};

export default Game;

/**
 * Make sure the coordinates that the player put in for each ship in "App.js" is on the player's board and the AI's ship placement is randomized without going over any previously taken squares.
 */