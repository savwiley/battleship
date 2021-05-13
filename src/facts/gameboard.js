import Ships from "./ships.js";
import shipList from "../data/shipList.json";
import enemyShipList from "../data/enemyShipList.json";
import checkCoord from "./checkCoord.js";

//this file processes clicks, deciphers action, and sends commands accordingly

const gameboard = (player, ship, action, coord) => {

  //grab the ship
  let shipArr;
  if (player === "human") {
    shipArr = shipList.filter((e) => e.name === ship);
  } else if (player === "computer") {
    shipArr = enemyShipList.filter((e) => e.name === ship);
  }
  //array of x coords
  const xArr = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];
  //splitting coord into array for placement
  const coArr = coord.split("");
  //grabs square dom of coord
  const square = document.querySelector(`#${coord}`);

  //prevents ships from leaving the grid
  function range(numb) {
    return numb < 0 ? false : (numb > 9 ? false : true)
  }

  if (action === "missed") {
    if (square) {
      square.classList.toggle("missed");
    }

  } else if (action === "attack") {
    const attIndex = shipArr[0]["coords"].indexOf(coord);
    if (square) {
      square.classList.toggle("attacked");
    }
    Ships(ship, attIndex);

  } else if (action === "placeV" || action === "placeH") {
    //check if ship has already been placed
    if (shipArr[0]["coords"].length !== shipArr[0]["length"]) {
      //stores all coords
      let coordArr = [];
      //stores booleans
      let checkArr = [];
      //variable
      let numb = 0;
      //if placement vertical
      if (action === "placeV") {
        //loops through each coord to save
        for (let i = 0; i < shipArr[0]["length"]; i++) {
          const limit = range(coArr[1]);
          if (limit === true) {
            const yCoord = coArr[0] + coArr[1];
            coordArr.push(yCoord);
            coArr[1]++;
          } else if (limit === false && player === "human") {
            alert("Ships can't leave grid");
            coordArr = [];
            i = shipArr[0]["length"];
          } else if (limit === false && player === "computer") {
            coordArr = [];
            i = shipArr[0]["length"];
          }
        };
      //if placement horizontal
      } else if (action === "placeH") {
        //finds index of letter
        let index = xArr.findIndex(e => e === coArr[0]);
        //loops through each coord to save
        for (let i = 0; i < shipArr[0]["length"]; i++) {
          const limit = range(index);
          if (limit === true) {
            const xCoord = xArr[index] + coArr[1];
            coordArr.push(xCoord);
            index++;
          } else if (limit === false && player === "human") {
            alert("Ships can't leave grid");
            coordArr = [];
            i = shipArr[0]["length"];
          } else if (limit === false && player === "computer") {
            coordArr = [];
            i = shipArr[0]["length"];
          }
        };
      }
      //checks all coords and saves booleans
      coordArr.map(e => {
        if (player === "human") {
          return checkArr.push(checkCoord("human", e));
        } else {
          return checkArr.push(checkCoord("computer", e));
        }
      });
      //check all booleans to find if any are true
      checkArr.map(e => e === true ? numb++ : numb);
      //if all booleans are false, place ship
      if (numb === 0) {
        coordArr.map (e => {
          return shipArr[0]["coords"].push(e);
        })
      //if any booleans are true, send alert
      } else if (numb !== 0 && player === "human") {
        alert("Ships can't overlap");
      };
      //visually take squares for player only
      shipArr[0]["coords"].map(e => {
        const squares = document.querySelectorAll(`#${e}`);
        return squares[0].classList.toggle("placed");
      });
    }

  }
  
  // x = A-E; y = 1-5
  // x left/right (letters), y up/down (numbers)


  /*
  shipArr[0]["coords"].map(e => {
      const squares = document.querySelectorAll(`#${e}`);
      return squares.map(e => {
        return squares.style.background = "green";
      })
    })


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