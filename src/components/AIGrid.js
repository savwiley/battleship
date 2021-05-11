import React, { useEffect } from "react";
import shipList from "../data/enemyShipList.json";
//import gameboard from "../facts/gameboard.js";
//import checkCoord from "../facts/checkCoord.js";

const AIGrid = () => {
  const alpha = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];

  //this logic places computer ships on computer grid when game starts
  const takenCoords = [];

  shipList.map(e => {
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
          console.log(`${takenCoords[i]} placed with grid`);
          square.classList.toggle("placed");
        }
      }
    }
  });






/*

  useEffect(() => {
    //gets a random coord
    const getCoord = () => {
      const numbX = Math.floor(Math.random() * 10);
      const letterX = alpha[numbX];
      const numbY = Math.floor(Math.random() * 10);
      return letterX + numbY;
    };

    //gets a random direction
    const getDirection = () => {
      const numb = Math.floor(Math.random() * 2);
      if (numb === 0) {
        return "placeV";
      } else if (numb === 1) {
        return "placeH";
      }
    };

    //gets a random, unplaced ship array
    const getShip = () => {
      for (let i = 0; i <= shipList.length; i++) {
        if (shipList[i]["coords"].length !== shipList[i]["length"]) {
          const shipArr = shipList[i];
          i = shipList.length;
          return shipArr;
        }
      }
    };



    //prevents ships from leaving the grid
    function range(numb) {
      return numb < 0 ? false : (numb > 9 ? false : true)
    };

    //stores all coords
    let coordArr = [];
    //stores booleans
    let checkArr = [];
    //variable
    let number = 0;
    //coord
    let coord = getCoord();
    let coArr = coord.split("");
    //placement
    let place = getDirection();
    //ship
    let shipArr = getShip();


    //if placement vertical
    if (place === "placeV") {
      //loops through each coord to save
      for (let i = 0; i < shipArr["length"]; i++) {
        const limit = range(coArr[1]);
        if (limit === true) {
          const yCoord = coArr[0] + coArr[1];
          coordArr.push(yCoord);
          coArr[1]++;
        } else {
          coordArr = [];
          i = 0;
          coord = getCoord();
        }
      };
    //if placement horizontal
    } else if (place === "placeH") {
      //finds index of letter
      let index = alpha.findIndex(e => e === coArr[0]);
      //loops through each coord to save
      for (let i = 0; i < shipArr["length"]; i++) {
        const limit = range(index);
        if (limit === true) {
          const xCoord = alpha[index] + coArr[1];
          coordArr.push(xCoord);
          index++;
        } else {
          coordArr = [];
          i = 0;
          coord = getCoord();
        }
      };
    }


    //checks all coords and saves booleans
    coordArr.map(e => {
      return checkArr.push(checkCoord("computer", e));
    });
    //check all booleans to find if any are true
    checkArr.map(e => e === true ? number++ : number);
    //if all booleans are false, place ship
    if (number === 0) {
      coordArr.map (e => {
        return shipArr["coords"].push(e);
      })
    };
    //visually take squares
    shipArr["coords"].map(e => {
      const squares = document.querySelectorAll(`#${e}`);
      return squares[0].classList.toggle("placed");
    });

  });

  */







   /**
    * WHAT IF
    * I create a func that runs through the list of ships and pulls out the first one that has no coords.
    * 
    * Then I use that with getCoord and getDirection to create some variables and send it all over to a func in another file that's similar to gameboard but just has placement logic that's specific for the AIGrid.
    * 
    * I'm pretty sure that it won't work if I put all that logic here...
    * 
    * Like in PlayerGrid, it should run through the coords already there. So perhaps I should randomly create AI coords in the App.js and run it in the background.
    * 
    * THEN AGAIN, we can try to put it all here and see what happens. I can run a useEffect so it'll do it when the page loads and run it on loop until all the ships are placed.
    */



  /**
   * I also need to check that through the checkCoord func.
   * 
   * If checkCoord returns false, you have to run through with that same ship again until it works.
   */




   /**
    * WHAT IF
    * I create a func that runs through the list of ships and pulls out the first one that has no coords.
    * 
    * Then I use that with getCoord and getDirection to create some variables and send it all over to a func in another file that's similar to gameboard but just has placement logic that's specific for the AIGrid.
    * 
    * I'm pretty sure that it won't work if I put all that logic here...
    * 
    * Like in PlayerGrid, it should run through the coords already there. So perhaps I should randomly create AI coords in the App.js and run it in the background.
    * 
    * THEN AGAIN, we can try to put it all here and see what happens. I can run a useEffect so it'll do it when the page loads and run it on loop until all the ships are placed.
    */



  /**PLACEMENT LOGIC
   * 
   * } else if (action === "placeV" || action === "placeH") {
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
          } else {
            alert("Ships can't leave grid");
            coordArr = [];
            i = shipArr[0]["length"];
          }
        };
      //if placement horizontal
      } else if (action === "placeH") {
        //finds index of letter
        let index = xArr.findIndex(e => e === coArr[0]);
        //loops through each coord to save
        for (let i = 0; i < shipArr[0]["length"]; i++) {
          const limit = range(index);
          if (limit === true) {
            const xCoord = xArr[index] + coArr[1];
            coordArr.push(xCoord);
            index++;
          } else {
            alert("Ships can't leave grid");
            coordArr = [];
            i = shipArr[0]["length"];
          }
        };
      }
      //checks all coords and saves booleans
      coordArr.map(e => {
        return checkArr.push(checkCoord("human", e));
      });
      //check all booleans to find if any are true
      checkArr.map(e => e === true ? numb++ : numb);
      //if all booleans are false, place ship
      if (numb === 0) {
        coordArr.map (e => {
          return shipArr[0]["coords"].push(e);
        })
      //if any booleans are true, send alert
      } else {
        alert("Ships can't overlap");
      };
      //visually take squares
      shipArr[0]["coords"].map(e => {
        const squares = document.querySelectorAll(`#${e}`);
        return squares[0].classList.toggle("placed");
      });
    }
   */






  /**
   * see PlayerGrid.js
   * 
   * Everything's pretty much the same except these coordinates need to be randomly placed. Use some Math.random up in here.
   * 
   * Try to make sure ships never overlap. Same on Grid & PlayerGrid.
   */

  return(
    <div className="grid aiGrid">
      {alpha.map(i =>
        alpha.map(e =>
          <div 
            className="square"
            id={e + alpha.indexOf(i)}
            key={e + alpha.indexOf(i)}>
              {e + alpha.indexOf(i)}
          </div>
        )
      )}
    </div>
  )
};

export default AIGrid;