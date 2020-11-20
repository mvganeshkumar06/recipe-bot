import React from "react";
import ReactDOM from "react-dom";
import { App, AppContext } from "./App";
import RecipeDetails from "./RecipeDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/recipiedetails:key">
        <RecipeDetails appContext={AppContext} />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
