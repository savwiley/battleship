import shipList from "../data/shipList.json";
import enemyList from "../data/enemyShipList.json";

//this file checks to see if any squares are taken by ships

const checkCoord = (player, coord) => {
  let check = false;
  let plTakenCoords = [];
  let aiTakenCoords = [];

  //checks if the square is a ship
  if (player === "human") {
    shipList.map((e) => {
      for (let i = 0; i < e.length; i++) {
        plTakenCoords.push(e.coords[i]);
      }
      return plTakenCoords;
    });
    plTakenCoords.map((e) => (e === coord ? (check = true) : null));
  } else if (player === "computer") {
    enemyList.map((e) => {
      for (let i = 0; i < e.length; i++) {
        aiTakenCoords.push(e.coords[i]);
      }
      return aiTakenCoords;
    });
    aiTakenCoords.map((e) => (e === coord ? (check = true) : null));
  }

  return check;
  //check returns false if coord isn't taken up or true if it is
};

export default checkCoord;
