import React, { useEffect } from "react";
//import { Link } from "react-router-dom";
import Grid from "./components/Grid.js";

//this file will be for placing ships

function App() {

  //variables
  let place = "placeH";
  let ship;

  //placement direction logic
  useEffect(() => {
    const dirBtn = document.querySelector(".directionBtn");

    const direction = () => {
      dirBtn.textContent = "Place Ships Horizontally";
      place = "placeV";
    }

    if (dirBtn) {
      dirBtn.addEventListener("click", direction);
    }
  })


    /**
     * Create logic to place ships
     * + Create logic to turn ships vertical or horizontal
     * - Create individual ships that player can select
     * - Fill in the squares using Grid that the player selects
     * - Send ship choice and hori/vert via params to Grid
     * 
     * 
     * Action place can be "placeV" & "placeH" to decide vert/hori & I can just input || in the conditional.
     */

  return (
    <div className="App">
      
      <Grid place={ place } />

      <button class="directionBtn">Place Ships Vertically</button>

      
    
    </div>
  );
}

export default App;

/**
 * https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/battleship
 */