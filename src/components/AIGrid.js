import React, { useEffect } from "react";
import shipList from "../data/enemyShipList.json";
import gameboard from "../facts/gameboard.js";
import aiTurn from "../facts/aiTurn.js";

const AIGrid = () => {
  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  //this logic places computer ships on computer grid when game starts
  const takenCoords = [];

  shipList.map((e) => {
    for (let i = 0; i < e.length; i++) {
      takenCoords.push(e.coords[i]);
    }
    return takenCoords;
  });

  useEffect(() => {
    for (let i = 0; i < takenCoords.length; i++) {
      const grid = document.querySelector(".aiGrid");
      if (grid) {
        const square = grid.querySelector(`#${takenCoords[i]}`);
        if (square) {
          square.classList.toggle("placed");
        }
      }
    }
  });

  //player takes a turn
  useEffect(() => {
    //selects squares only on aiGrid
    const grid = Array.from(document.getElementsByClassName("grid aiGrid"));
    let square;
    grid.map((e) => {
      return (square = Array.from(e.querySelectorAll(".square")));
    });

    const attackSquare = (e, ship, move) => {
      if (e.className === "square" || e.className === "square placed") {
        aiTurn();
      }
      gameboard("computer", ship, move, e.id);
    };

    if (grid && square) {
      square.map((e) => {
        return e.addEventListener("click", () => {
          let compWin = 0;
          for (let i = 0; i < shipList.length; i++) {
            if (shipList[i]["sunk"] === false) {
              i = shipList.length;
              compWin = 0;
            } else {
              compWin++;
            }
          }
          if (compWin === 0) {
            let numb = 0;
            let hit = "missed";
            if (e.className === "square placed") {
              hit = "attack";
            }
            for (let i = 0; i < shipList.length; i++) {
              shipList[i]["coords"].map((x) => {
                if (x === e.id) {
                  numb = i;
                }
                return numb;
              });
            }
            return attackSquare(e, shipList[numb]["name"], hit);
          }
        });
      });
    }
  });

  return (
    <div className="grid aiGrid">
      {alpha.map((i) =>
        alpha.map((e) => (
          <div
            className="square"
            id={e + alpha.indexOf(i)}
            key={e + alpha.indexOf(i)}
          >
            {e + alpha.indexOf(i)}
          </div>
        ))
      )}
    </div>
  );
};

export default AIGrid;
