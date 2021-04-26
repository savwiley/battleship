import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Game from "./Game.js";

const Routes = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/Game" render={() => <Game />} />
      </Switch>
    </HashRouter>
  )
}

export default Routes;