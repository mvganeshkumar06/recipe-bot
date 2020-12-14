import React, { useState } from "react";
import Recipe from "./Recipe";
import RecipeDetails from "./RecipeDetails";
import css from "./Recipe.module.css"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
require("dotenv").config();


const App = () => {

    const key = process.env.REACT_APP_KEY;

    const [recipes, setRecipes] = useState([]);

    const [validation, setValidation] = useState("");

    async function fetchData(input) {
        try {
            const response = await axios({
                method: "get",

                url: `https://api.spoonacular.com/recipes/complexSearch?query=${input.searchValue}&number=${input.slideValue}&instructionsRequired=true&addRecipeNutrition=true&apiKey=${key}`,
            });

            if (!response.data.results || response.data.results.length === 0) {
                setValidation(
                    <p className={css.notFoundMessage}>
                        Sorry no food item found. Try something else
                    </p>
                );
            } else {
                setRecipes(response.data.results);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Recipe recipes={recipes} setRecipes={setRecipes} validation={validation} setValidation={setValidation} fetchData={fetchData} />
                    </Route>
                    <Route path="/recipedetails:id">
                        <RecipeDetails recipes={recipes} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );

}

export default App;