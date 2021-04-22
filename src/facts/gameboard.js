import Ships from "./ships.js";
import shipList from "../data/shipList.json";

//this file processes clicks, deciphers action, and sends commands accordingly

const gameboard = (ship, action, x, y) => {
  //when there's a miss, the 'ship' param is undefined

  //grab the ship
  const shipArr = shipList.filter((e) => e.name === ship);
  //X array
  const xArr = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];
  //A1 = A + 1
  const coord = x + y;
  
  let vertical = false;
  //create conditional statement to change vertical using a btn or smth

  if (action === "place") {
    if (vertical) {
      for (let i = y; i <= shipArr[0]["length"]; i++) {
        const yCoord = x + i; //produces A1
        shipArr[0]["coords"].push(yCoord); //saves A1 to array
      }
    } else if (!vertical) {
      const index = xArr.findIndex(e => e === x);
      for (let i = index; i < shipArr[0]["length"]; i++) {
        const xCoord = xArr[i] + y;
        shipArr[0]["coords"].push(xCoord);
      }
    }
  } else if (action === "attack") {
    //finds index of coord & uses it as the mark
    const attIndex = shipArr[0]["coords"].findIndex(e => e === coord);
    Ships(ship, attIndex)
  } else if (action === "miss") {
    //do something to the coord block
    //perhaps add this coord to another array somewhere, too?
  }
  
  // x = A-E; y = 1-5
  // x left/right (letters), y up/down (numbers)


  /*
  Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.

  Gameboards should keep track of missed attacks so they can display them properly.

  Gameboards should be able to report whether or not all of their ships have been sunk.
  */


  return shipList[0];
}

export default gameboard;



/**Create Gameboard factory.
 * 
Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.

Gameboards should be able to place ships at specific coordinates by calling the ship factory function.

Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.

Gameboards should keep track of missed attacks so they can display them properly.

Gameboards should be able to report whether or not all of their ships have been sunk. 
*/