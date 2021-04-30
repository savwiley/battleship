import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import Game from "./Game.js";
//import shipList from "./data/shipList.json";

const Routes = () => {


  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path ="/" render={() => <App />} />
        <Route exact path="/Game" render={() => <Game />} />
      </Switch>
    </HashRouter>
  )
}

export default Routes;