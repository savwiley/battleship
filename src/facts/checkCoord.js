import shipList from "../data/shipList.json";
import enemyList from "../data/enemyShipList.json";

//this file checks to see if any squares are taken by ships/misses/etc.

//I still need this but I factored it all wrong. I've already got logic to dictate attacks/misses/etc and I already have logic to remove event listeners

//I need this file to work almost solely for the AI to check coordinates for placing ships and attacking the players board.

//I already have logic that checks for where the ships are and if the coord hit any of them on both/either board.

//I need it to be able to (on its OWN board) know where available squares are to place its own ships and (on PLAYER's board) know where available squares are that weren't previously clicked.

//Can I do that by checking squares that only have event listeners? I doubt it. I could ensure that they don't have the added classes toggled in? Which means I have to go back and add toggled classes to attacked/sunken ships. (classes are .attacked & .missed)

//BRUH https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/

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