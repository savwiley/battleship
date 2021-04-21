const Ships = (ship, length, mark) => {
  let hits = 0;
  let sunk = false;

  const hit = (mark) => {
    //array of targets on a ship
    let lengthArr = [];
    //creates the targets in the array
    for (let i = 1; i === length; i++) {
      lengthArr.push(i);
    }

    //finds the mark in the array (if mark = 1, it does something with 1 in the array)

    //can't remove it or it'll hit it again

    //create a new array of targets hit? cross reference the two?

    //i wish i could make them object keys instead and set the values as booleans

  }

  //Ships should have a hit() function that takes a number and then marks that position as ‘hit’.

  if (hits === length) {
    sunk = true;
  }
  return ({ ship, length, hits, sunk })
}




export default Ships;


/**
 * Carrier - 5
 * Battleship - 4
 * Destroyer - 3
 * Submarine - 3
 * Patrol Boat - 2
 */

 /**
  * Begin your app by creating the Ship factory function.
  * 
Your ‘ships’ will be objects that include their length, where they’ve been hit and whether or not they’ve been sunk.

REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.

Ships should have a hit() function that takes a number and then marks that position as ‘hit’.

isSunk() should be a function that calculates it based on their length and whether all of their positions are ‘hit’.
  */