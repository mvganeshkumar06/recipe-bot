import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import css from "./Recipe.module.css";

const Recipe = (props) => {
  const { recipes, setRecipes, validation, setValidation, fetchData } = props;
  const [input, setInput] = useState({
    searchValue: "",
    slideValue: 1,
  });

  useEffect(() => {
    setTimeout(() => {
      setValidation("");
    }, 3000);
  }, [validation, setValidation]);

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
    setRecipes([]);
  };

  return (
    <>
      <div id={css.container}>
        <div className={css.inputContainer}>
          <p className={css.head}>Recipe Bot</p>
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

          <div className={css.btnContainer}>
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
          <RecipeList recipes={recipes} />
        </div>
        <footer>
          <div id={css.socialFooter}>
            <h4> Made with <img id={css.heartIcon} src="https://img.icons8.com/fluent/48/000000/like.png" alt="heart" /> by Ganesh Kumar</h4>
            <a
              href="https://mvganeshkumar.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={css.icons}
                src="https://img.icons8.com/windows/64/000000/domain.png"
                alt="website"
              />
            </a>
            <a
              href="https://github.com/Ganesh-Kumar6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={css.icons}
                src="https://img.icons8.com/fluent/48/000000/github.png"
                alt="github"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ganesh-kumar6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={css.icons}
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a
              href="https://dev.to/ganeshkumar6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={css.icons}
                src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                alt="dev"
              />
            </a>
          </div>
          <a
            href="https://spoonacular.com/food-api
              "
            target="_blank"
            rel="noopener noreferrer"
            className={css.iconAttribution}
          >
            Powered by Spoonacular API
        </a>
          <a className={css.iconAttribution} href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons by Icons8</a>
        </footer>
      </div>
    </>
  );
};

export default Recipe;
