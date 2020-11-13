import React, { useState } from "react";
import RecipeList from "./RecipeList";
import "./App.css";
import axios from "axios";
require("dotenv").config();

const App = () => {
  const key = process.env.REACT_APP_KEY;

  const [recipes, setRecipes] = useState([]);

  const [validation, setValidation] = useState("");

  const [input, setInput] = useState({
    searchValue: "",
    slideValue: 1,
  });

  async function fetchData(input) {
    try {
      const response = await axios({
        method: "get",

        url: `https://api.spoonacular.com/recipes/complexSearch?query=${input.searchValue}&number=${input.slideValue}&instructionsRequired=true&addRecipeNutrition=true&apiKey=${key}`,
      });

      if (!response.data.results || response.data.results.length === 0) {
        setValidation(
          <p className="notFoundMessage">
            Sorry no food item found ! Try something else :)
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

  // const sendData = () => {
  //   if (searchValue) {
  //     setValidation("");

  //     fetchData(searchValue, slideValue);
  //   } else {
  //     setValidation(<h3 className="alert">Enter some food item !</h3>);
  //   }
  // };

  // const resetData = () => {
  //   document.querySelector(".search").value = "";

  //   document.querySelector(".slider").value = 1;

  //   setValidation("");
  // };

  return (
    <>
      <div className="inputContainer">
        <p className="head">Recipe Bot</p>
        <input
          type="text"
          name="searchValue"
          className="search"
          placeholder="Enter the food name"
          onChange={updateInput}
          required
        />
        <p className="sliderhead">Select number of recipes [1 to 20]</p>
        <input
          type="range"
          name="slideValue"
          className="slider"
          min="1"
          max="20"
          onChange={updateInput}
        />

        <button className="btn" onClick={() => fetchData(input)}>
          Find me Recipes
        </button>

        {/* <button className="btn" type="reset" onClick={resetData}>
          Reset Input
        </button> */}

        <a
          href="https://spoonacular.com/food-api
              "
          target="_blank"
          rel="noopener noreferrer"
          className="attribution"
        >
          Powered by Spoonacular API
        </a>
      </div>
      <div className="outputContainer">
        {validation}
        <RecipeList values={recipes} />
      </div>
    </>
  );
};

export default App;
