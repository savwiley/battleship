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
  };

  //determines which target was hit and removes it
  const hit = shipArr[0]["targets"].indexOf(mark + 1);
  shipArr[0]["targets"].splice(hit, 1);

  //sinks ships
  if (shipArr[0]["targets"].length === 0) {
    shipArr[0]["sunk"] = true;
    if (player === "human") {
      alert(`Your ${shipArr[0]["name"]} was sunk!`)
    } else if (player === "computer") {
      alert(`You sunk their ${shipArr[0]["name"]}!`)
    };
    shipArr[0]["coords"].map(e => {
      //grabs square dom of coord from each board
      let square;
      let grid;
      if (player === "human") {
        grid = Array.from(document.getElementsByClassName("grid playerGrid"));
        grid.map(x => {
          return square = x.querySelector(`#${e}`);
        });
      } else if (player === "computer") {
        grid = Array.from(document.getElementsByClassName("grid aiGrid"));
        grid.map(x => {
          return square = x.querySelector(`#${e}`);
        });
      };
      return square.classList.toggle("sunk");
    });
  };
}

export default Ships;