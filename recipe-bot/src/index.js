import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RecipeDetails from "./RecipeDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <App />
      </Route>
      <Route path="/recipedetails">
        <RecipeDetails />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
