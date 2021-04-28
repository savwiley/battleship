import React from "react";
//import gameboard from "./facts/gameboard.js";
import PlayerGrid from "./components/PlayerGrid.js";
import AIGrid from "./components/AIGrid.js";

//this file will be for actually playing the game

const Game = () => {

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