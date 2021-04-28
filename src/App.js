import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "./components/Grid.js";

//this file will be for placing ships

function App() {
  const place = useRef("placeH");
  const ship = useRef();

  //placement direction logic
  useEffect(() => {
    const dirBtn = document.querySelector(".directionBtn");

    const direction = () => {
      if (place.current === "placeH") {
        dirBtn.textContent = "Place Ships Horizontally";
        place.current = "placeV";
      } else if (place.current === "placeV") {
        dirBtn.textContent = "Place Ships Vertically";
        place.current = "placeH";
      }
    }

    if (dirBtn) {
      dirBtn.addEventListener("click", direction);
    }
  });


  //ship selection logic
  useEffect(() => {
    const shipContList = Array.from(document.querySelectorAll(".ship"));

    const nameShip = (e) => {
      ship.current = e.textContent;
    }

    if (shipContList) {
      shipContList.map(e => {
        return e.addEventListener("click", () => {
          nameShip(e);
        });
      })
    }
  });


    /**
     * Create logic to place ships
     * - Fill in the squares using Grid that the player selects
     * - Create route link that'll take you to the Game.js after all ships are on the grid
     * 
     * FA dots & circles for pegs/ships
     */

  return (
    <div className="App">
      
      <Grid place={place} ship={ship} />

      <button className="directionBtn">Place Ships Vertically</button>

      <div className="shipContainer">
        <div className="ship">Carrier</div>
        <div className="ship">Battleship</div>
        <div className="ship">Destroyer</div>
        <div className="ship">Submarine</div>
        <div className="ship">Patrol Boat</div>
      </div>

      <Link to="/Game">
        <div className="playBtn">
          Play Game!
        </div>
      </Link>
    
    </div>
  );
}

export default App;

/**
 * https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/battleship
 */