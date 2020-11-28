import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import css from "./App.module.css";
import axios from "axios";
require("dotenv").config();

const AppContext = React.createContext();

const App = () => {
  const key = process.env.REACT_APP_KEY;

  const [recipes, setRecipes] = useState([]);

  const [validation, setValidation] = useState("");

  const [input, setInput] = useState({
    searchValue: "",
    slideValue: 1,
  });

  useEffect(() => {
    setTimeout(() => {
      setValidation("");
    }, 3000);
  }, [validation]);

  async function fetchData(input) {
    try {
      const response = await axios({
        method: "get",

        url: `https://api.spoonacular.com/recipes/complexSearch?query=${input.searchValue}&number=${input.slideValue}&instructionsRequired=true&addRecipeNutrition=true&apiKey=${key}`,
      });

      if (!response.data.results || response.data.results.length === 0) {
        setValidation(
          <p className="notFoundMessage">
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

  const updateInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const validateAndFetch = () => {
    if (input.searchValue) {
      fetchData(input);
    } else {
      setValidation(<p className={css.noInput}>Enter some food item !</p>);
    }
  };

  const resetData = () => {
    setInput({ searchValue: "", slideValue: 1 });
  };

  return (
    <AppContext.Provider value={recipes && { recipes, input }}>
      <div className={css.inputContainer}>
        <p className={css.head}>Recipe Bot</p>
        <a
          href="https://spoonacular.com/food-api
              "
          target="_blank"
          rel="noopener noreferrer"
          className={css.attribution}
        >
          Powered by Spoonacular API
        </a>
        <input
          type="text"
          name="searchValue"
          className={css.search}
          placeholder="Enter the food name"
          value={input.searchValue}
          onChange={updateInput}
        />
        <p className={css.sliderhead}>Select number of recipes [1 to 20]</p>
        <input
          type="range"
          name="slideValue"
          className={css.slider}
          min="1"
          max="20"
          value={input.slideValue}
          onChange={updateInput}
        />

        <div className="btnContainer">
          <button className={css.btn} onClick={() => validateAndFetch(input)}>
            Find me recipes
          </button>

          <button className={css.btn} type="reset" onClick={resetData}>
            Reset
          </button>
        </div>

        {validation}
      </div>
      <div className={css.outputContainer}>
        <RecipeList />
      </div>
    </AppContext.Provider>
  );
};

export { App, AppContext };
