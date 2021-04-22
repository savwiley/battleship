import gameboard from "./gameboard.js";
import shipList from "../data/shipList.json";

//this file changes the ship objects in the data folder

const Ships = (ship, mark) => {

  //grab the ship
  const shipArr = shipList.filter((e) => e.name === ship);

  //hit the ship
  const hit = shipArr[0]["targets"].findIndex((e) => e === mark);
  shipArr[0]["targets"].splice(hit, 1);

  //sink ship
  if (shipArr[0]["targets"].length < 1) {
    shipArr[0]["sunk"] = true;
  };

  return shipArr[0];
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

>>> I think I should pre-make each ship with name & length built in with mutable coords, hits, and sunk boolean.

REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.

Ships should have a hit() function that takes a number and then marks that position as ‘hit’.

isSunk() should be a function that calculates it based on their length and whether all of their positions are ‘hit’.




let hits = 0;
  let sunk = false;

  //array of targets on a ship
  let targets = [];
  //creates the targets in the array
  for (let i = 1; i <= length; i++) {
    targets.push(i);
  }

  if (mark) {
    let numb = targets.find(e => e === mark);
    targets.splice((numb - 1), 1, "X");
  }

  // I'm thinking we leave this target array & logic for another file where we can save this information in a state. Perhaps here we just take mark and send that information to this state file, so it knows what to update. It would also have to receive info to know the sunken status?

  // Or perhaps sunken status can be its own function

  if (hits === length) {
    sunk = true;
  }
  */