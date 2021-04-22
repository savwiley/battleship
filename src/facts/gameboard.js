import Ships from "./ships.js";
import shipList from "../data/shipList.json";

//this file processes clicks, deciphers action, and sends commands accordingly

const gameboard = (ship, action, x, y) => {

  //grab the ship
  const shipArr = shipList.filter((e) => e.name === ship);
  //X array
  const xArr = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];

  // shipArr[0][""]

  if (action === "place") {
    //make directional placement parameter
    if (/*up/down*/) {
      for (let i = y; i <= shipArr[0]["length"]; i++) {
        const yCoord = x + i; //produces A1
        shipArr[0]["coords"].push(yCoord); //saves A1 to array
      }
    } else if (/*left/right*/) {
      const index = xArr.findIndex(e => e === x);
      for (let i = index; i < shipArr[0]["length"]; i++) {
        const xCoord = xArr[i] + y;
        shipArr[0]["coords"].push(xCoord);
      }
    }
  } else if (action === "attack") {
    //add logic that deciphers where the mark is according to the coords

    /*coord index could be used to find the target number element
    > if shipArr[0]["coords"][1] then remove 1 from target array
        "coords": [A2, A3],
        "targets": [1, 2]
          >>> HITS MARK A2
        "coords": [A2, A3],
        "targets": [2]
    */

    Ships(shipArr[0]["name"], /*MARK*/)
  } else if (action === "miss") {
    //??? make a new func that just handles these?
  }
  
  //x = "B";
  //y = "3";
  //perhaps I should combine them in one parameter like "3B"
  // >> combining them would mean making links for each block instead of tracking by row and column. but how do I do that??s
  // x = A-E; y = 1-5
  // x left/right (letters), y up/down (numbers)


  /*
  Gameboards should be able to place ships at specific coordinates by calling the ship factory function.

  Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
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