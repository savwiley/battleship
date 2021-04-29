import shipList from "../data/shipList.json";
import enemyList from "../data/enemyShipList.json";

//this file checks to see if any squares are taken by ships/misses/etc.

const checkCoord = (player, coord) => {
  let check = true;
  let plTakenCoords = [];
  let aiTakenCoords = [];

  plTakenCoords = [];
  shipList.map(e => {
    for (let i = 0; i < e.length; i++) {
      plTakenCoords.push(e.coords[i]);
    }
  });

  aiTakenCoords = [];
  enemyList.map(e => {
    for (let i = 0; i < e.length; i++) {
      aiTakenCoords.push(e.coords[i]);
    }
  });

  //checks if the square is a ship
  if (player === "human") {
    plTakenCoords.map(e => 
      e === coord ? check = false : check = true
    )
  } else if (player === "computer") {
    aiTakenCoords.map(e => 
      e === coord ? check = false : check = true
    );
  };

  //I need to decipher misses, too
  //I also need to place ships in Game.js using the JSON

  return check;
  //check returns true if coord isn't taken up or false if it is
}

export default checkCoord;



//not to mention that i somehow need to randomize the enemy ships BUT by using that logic, I would still need to know which squares are taken so that the program doesn't overlap anything. And the AI needs to know where to hit on the player's board that wasn't already hit.