import React, { useEffect } from "react";
import gameboard from "../facts/gameboard.js";
import shipList from "../data/shipList.json";

const Grid = (props) => {
  const { place, ship } = props;

  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let numb = 0;

  useEffect(() => {
    const square = Array.from(document.querySelectorAll(".square"));
    const grid = document.querySelector(".grid");
    const shipMenuList = Array.from(document.querySelectorAll(".ship"));
    const playBtn = document.querySelector(".playBtn");
    playBtn.style.display = "none";

    const changeSquare = (e) => {
      if (!ship.current) {
        alert("Please choose a ship!");
      } else {
        gameboard("human", ship.current, place.current, e.id);
        shipMenuList.map((e) => {
          if (e.textContent === ship.current) {
            shipList.map((a) => {
              if (e.textContent === a["name"]) {
                if (a["coords"].length === a["length"]) {
                  e.style.background = "#929292";
                  e.style.color = "#616161";
                  e.style.outline = "1px solid #fff";
                  numb++;
                }
              }
              return a;
            });
          }
          return e;
        });
        if (numb === 5) {
          playBtn.style.display = "block";
        }
        ship.current = null;
      }
    };

    if (grid && square) {
      square.map((e) => {
        return e.addEventListener("click", () => {
          changeSquare(e);
        });
      });
    }
  });

  return (
    <div className="grid">
      {alpha.map((i) =>
        alpha.map((e) => (
          <div
            className="square"
            id={e + alpha.indexOf(i)}
            key={e + alpha.indexOf(i)}
          ></div>
        ))
      )}
    </div>
  );
};

export default Grid;
