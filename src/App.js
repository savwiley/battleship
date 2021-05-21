import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "./components/Grid.js";
import Header from "./components/Header.js";
import InfoBoard from "./components/InfoBoard.js";

//this file is for placing ships

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
          shipContList.map(a => {
            a.style.outline = "1px solid #fff";
            return a;
          });
          nameShip(e);
          e.style.outline = "1px solid #0f0";
        });
      })
    }
  });

  return (
    <div className="App">

      <Header />

      <InfoBoard />
      
      <Grid place={place} ship={ship} />

      <div className="menu">
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
    
    </div>
  );
}

export default App;

/**
 * https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/battleship
 * 
 * 
 * 
 * TODOS
 * -css
 * -license
 * -readme
 * -change alerts to css popups
 * -declare winner
 * -declare sunken ships
 * -check if testing returns are still needed (probs not???)
 * -hide computer's ships in css
 */