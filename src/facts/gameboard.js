import Ships from "./ships.js";
import shipList from "../data/shipList.json";
import enemyShipList from "../data/enemyShipList.json";
import checkCoord from "./checkCoord.js";

//this file processes clicks, deciphers action, and sends commands accordingly

const gameboard = (player, ship, action, coord) => {
  //NOTE: player is defined by which board is in play, not which player is taking a turn. If "human" is clicking on the "computer" board, then player = "computer."

  //grab the ship
  let shipArr;
  if (player === "human") {
    shipArr = shipList.filter((e) => e.name === ship);
  } else if (player === "computer") {
    shipArr = enemyShipList.filter((e) => e.name === ship);
  }
  //array of x coords
  const xArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  //splitting coord into array for placement
  const coArr = coord.split("");
  //grabs square dom of coord from each board
  let square;
  let grid;
  if (player === "human") {
    grid = Array.from(document.getElementsByClassName("grid playerGrid"));
    grid.map((e) => {
      return (square = e.querySelector(`#${coord}`));
    });
  } else if (player === "computer") {
    grid = Array.from(document.getElementsByClassName("grid aiGrid"));
    grid.map((e) => {
      return (square = e.querySelector(`#${coord}`));
    });
  }

  //grabs the placement menu items
  const shipMenuList = Array.from(document.querySelectorAll(".ship"));

  //grabs the messenger
  const messenger = document.querySelector(".messenger");

  //prevents ships from leaving the grid
  function range(numb) {
    return numb < 0 ? false : numb > 9 ? false : true;
  }

  if (action === "missed") {
    if (
      square.classList.value === "square missed" ||
      square.classList.value === "square placed attacked" ||
      square.classList.value === "square placed attacked sunk"
    ) {
      messenger.textContent = "Already struck here!";
    } else if (square) {
      square.classList.toggle("missed");
    }
  } else if (action === "attack") {
    const attIndex = shipArr[0]["coords"].indexOf(coord);
    if (square) {
      square.classList.toggle("attacked");
      Ships(player, ship, attIndex);
    }
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
            messenger.textContent = "Ships can't leave grid!";
            coordArr = [];
            i = shipArr[0]["length"];
            shipMenuList.map((e) => {
              if (e.textContent === shipArr[0]["name"]) {
                e.style.outline = "1px solid #fff";
              }
              return e;
            });
          } else if (limit === false && player === "computer") {
            coordArr = [];
            i = shipArr[0]["length"];
          }
        }
        //if placement horizontal
      } else if (action === "placeH") {
        //finds index of letter
        let index = xArr.findIndex((e) => e === coArr[0]);
        //loops through each coord to save
        for (let i = 0; i < shipArr[0]["length"]; i++) {
          const limit = range(index);
          if (limit === true) {
            const xCoord = xArr[index] + coArr[1];
            coordArr.push(xCoord);
            index++;
          } else if (limit === false && player === "human") {
            messenger.textContent = "Ships can't leave grid!";
            coordArr = [];
            i = shipArr[0]["length"];
            shipMenuList.map((e) => {
              if (e.textContent === shipArr[0]["name"]) {
                e.style.outline = "1px solid #fff";
              }
              return e;
            });
          } else if (limit === false && player === "computer") {
            coordArr = [];
            i = shipArr[0]["length"];
          }
        }
      }
      //checks all coords and saves booleans
      coordArr.map((e) => {
        if (player === "human") {
          return checkArr.push(checkCoord("human", e));
        } else {
          return checkArr.push(checkCoord("computer", e));
        }
      });
      //check all booleans to find if any are true
      checkArr.map((e) => (e === true ? numb++ : numb));
      //if all booleans are false, place ship
      if (numb === 0) {
        coordArr.map((e) => {
          return shipArr[0]["coords"].push(e);
        });
        //if any booleans are true, send alert
      } else if (numb !== 0 && player === "human") {
        messenger.textContent = "Ships can't overlap!";
        shipMenuList.map((e) => {
          if (e.textContent === shipArr[0]["name"]) {
            return (e.style.outline = "1px solid #fff");
          }
          return e;
        });
      }
      //visually take squares for player only
      shipArr[0]["coords"].map((e) => {
        const squares = document.querySelectorAll(`#${e}`);
        if (squares[0]) {
          return squares[0].classList.toggle("placed");
        }
        return null;
      });
    }
  }
};

export default gameboard;
