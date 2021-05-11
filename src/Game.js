import React from "react";
import gameboard from "./facts/gameboard.js";
import enShipList from "./data/enemyShipList.json";
import PlayerGrid from "./components/PlayerGrid.js";
import AIGrid from "./components/AIGrid.js";

//this file will be for actually playing the game

const Game = () => {
  const alpha = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];

  //gets a random coord
  const getCoord = () => {
    const numbX = Math.floor(Math.random() * 10);
    const letterX = alpha[numbX];
    const numbY = Math.floor(Math.random() * 10);
    console.log(letterX + numbY);
    return letterX + numbY;
  };

  //gets a random direction
  const getDirection = () => {
    const numb = Math.floor(Math.random() * 2);
    if (numb === 0) {
      return "placeV";
    } else if (numb === 1) {
      return "placeH";
    }
  };

  //gets a random, unplaced ship array
  const getShip = () => {
    for (let i = 0; i < enShipList.length; i++) {
      if (enShipList[i]["coords"].length !== enShipList[i]["length"]) {
        const shipArr = enShipList[i];
        i = enShipList.length;
        console.log(shipArr["name"]);
        return shipArr["name"];
      }
    }
  };

  //AI places ships
  for (let i = 0; i < 6; i++) {
    gameboard("computer", getShip(), getDirection(), getCoord());
    console.log(`I ran ${i} times!`);
  };

  /**
   * figure out how to run it again if ship fails to place
   * you have console.logs in gameboard loop and getCoords
   */


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