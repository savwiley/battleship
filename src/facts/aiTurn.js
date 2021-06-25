import shipList from "../data/shipList.json";
import gameboard from "./gameboard.js";

const aiTurn = () => {
  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  //grabs the doms
  const messenger = document.querySelector(".messenger");
  const cover = document.querySelector(".cover");

  //gets a random coord
  const getCoord = () => {
    try {
      const numbX = Math.floor(Math.random() * 10);
      const letterX = alpha[numbX];
      const numbY = Math.floor(Math.random() * 10);
      return letterX + numbY;
    } catch (error) {
      if (error instanceof RangeError) {
        alert("Game Over");
      }
    }
  };

  //selects square only from playerGrid
  const grid = Array.from(document.getElementsByClassName("grid playerGrid"));
  let square;
  grid.map((e) => {
    return (square = e.querySelector(`#${getCoord()}`));
  });

  if (square.className === "square placed" || square.className === "square") {
    let ship;
    let hit = "missed";
    if (square.className === "square placed") {
      hit = "attack";
    }
    for (let i = 0; i < shipList.length; i++) {
      // eslint-disable-next-line
      shipList[i]["coords"].map((x) => {
        if (x === square.id) {
          ship = shipList[i]["name"];
        }
        return ship;
      });
    }
    gameboard("human", ship, hit, square.id);
    if (hit === "missed") {
      messenger.textContent = `Computer attacks ${square.id}. They missed!`;
    } else if (hit === "attack") {
      messenger.textContent = `Computer attacks ${square.id}. It's a hit!`;
    }
  } else {
    aiTurn();
  }

  cover.style.zIndex = "0";
  cover.style.background = "transparent";
};

export default aiTurn;
