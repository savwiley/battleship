import shipList from "../data/shipList.json";
import enemyShipList from "../data/enemyShipList.json";

//this file changes the ship objects in the data folder

const Ships = (player, ship, mark) => {
  //grabs the ship
  let shipArr;
  if (player === "human") {
    shipArr = shipList.filter((e) => e.name === ship);
  } else if (player === "computer") {
    shipArr = enemyShipList.filter((e) => e.name === ship);
  }

  //grabs the messenger
  const messenger = document.querySelector(".messenger");

  //determines which target was hit and removes it
  const hit = shipArr[0]["targets"].indexOf(mark + 1);
  shipArr[0]["targets"].splice(hit, 1);

  //sinks ships
  if (shipArr[0]["targets"].length === 0) {
    shipArr[0]["sunk"] = true;
    if (player === "human") {
      messenger.textContent = `Your ${shipArr[0]["name"]} was sunk!`;
    } else if (player === "computer") {
      messenger.textContent = `You sunk their ${shipArr[0]["name"]}!`;
    }
    shipArr[0]["coords"].map((e) => {
      //grabs square dom of coord from each board
      let square;
      let grid;
      if (player === "human") {
        grid = Array.from(document.getElementsByClassName("grid playerGrid"));
        grid.map((x) => {
          return (square = x.querySelector(`#${e}`));
        });
      } else if (player === "computer") {
        grid = Array.from(document.getElementsByClassName("grid aiGrid"));
        grid.map((x) => {
          return (square = x.querySelector(`#${e}`));
        });
      }
      return square.classList.toggle("sunk");
    });
  }

  //determine if there's a winner yet
  //remember that player is by board, not who's taking the move
  if (player === "human") {
    let humanWin = 0;
    for (let i = 0; i < shipList.length; i++) {
      if (shipList[i]["sunk"] === false) {
        i = shipList.length;
        humanWin = 0;
      } else {
        humanWin++;
      }
    }
    if (humanWin !== 0) {
      messenger.textContent = "You lost!";
    }
  }
  if (player === "computer") {
    let compWin = 0;
    for (let i = 0; i < enemyShipList.length; i++) {
      if (enemyShipList[i]["sunk"] === false) {
        i = enemyShipList.length;
        compWin = 0;
      } else {
        compWin++;
      }
    }
    if (compWin !== 0) {
      messenger.textContent = "You won!";
    }
  }
};

export default Ships;
