import React from "react";
import Grid from "./components/Grid.js";
//import gameboard from "./facts/gameboard.js";

function App() {

  /*
  const square = document.querySelectorAll(".square");
  if (square) {
    square.map(e => {
      e.id.split(",");
      if (e.class !== "missed") {
        e.addEventListener("click", () => {
          gameboard(`ship`, `action`, e.id[0], e.id[1])
        })
      }
    }
  )}
  */


  return (
    <div className="App">
      
      <Grid />
    
    </div>
  );
}

export default App;

/**
 * https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/battleship
 */