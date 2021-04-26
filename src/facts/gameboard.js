import Ships from "./ships.js";
import shipList from "../data/shipList.json";

//this file processes clicks, deciphers action, and sends commands accordingly

const gameboard = (ship, action, coord) => {
  //when there's a miss, the 'ship' param is undefined
  //decide if its miss or attack somewhere

  //grab the ship
  const shipArr = shipList.filter((e) => e.name === ship);
  //array of x coords
  const xArr = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];
  //splitting coord into array for placement
  const coArr = coord.split("");

  
  if (action === "placeV") {
    for (let i = coArr[1]; i <= shipArr[0]["length"]; i++) {
      const yCoord = coArr[0] + i;
      shipArr[0]["coords"].push(yCoord); 
    }
  } else if (action === "placeH") {
    const index = xArr.findIndex(e => e === coArr[0]);
    for (let i = index; i < shipArr[0]["length"]; i++) {
      const xCoord = xArr[i] + coArr[1];
      shipArr[0]["coords"].push(xCoord);
    }
  } else if (action === "attack") {
    //finds index of coord & uses it as the mark
    const attIndex = shipArr[0]["coords"].findIndex(e => e === coord);
    Ships(ship, attIndex);
  } else if (action === "miss") {
    const square = document.querySelector(`#${coord}`);
    if (square) {
      square.classList.toggle("missed");
    }
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