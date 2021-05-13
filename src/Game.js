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
        return shipArr["name"];
      }
    }
  };


  //AI places ships
  while (enShipList[4]["coords"].length !== 2) {
    gameboard("computer", getShip(), getDirection(), getCoord());
  }



  /**
   * shipList.map(e => {
      for (let i = 0; i < e.length; i++) {
        plTakenCoords.push(e.coords[i]);
      }
      return plTakenCoords;
    });
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