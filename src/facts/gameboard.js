import Ships from "./ships.js";
import shipList from "../data/shipList.json";

const gameboard = (ship, action, x, y) => {

  //grab the ship
  const shipArr = shipList.filter((e) => e.name === ship);

  // shipArr[0][""]

  if (action === "place") {
    //call logic that place ship on the grid
  } else if (action === "attack") {
    //send it over to Ships
  } else if (action === "miss") {
    //??? make a new func that just handles these?
  }

  //x = "3";
  //y = "B";
  //perhaps I should combine them in one parameter like "3B"


  /*
  Gameboards should be able to place ships at specific coordinates by calling the ship factory function.

  Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
  */


  return ({ ship, action, x, y })


}

export default gameboard;

// x left/right (letters), y up/down (numbers)



/**Create Gameboard factory.
 * 
Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.

Gameboards should be able to place ships at specific coordinates by calling the ship factory function.

Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.

Gameboards should keep track of missed attacks so they can display them properly.

Gameboards should be able to report whether or not all of their ships have been sunk. 
*/