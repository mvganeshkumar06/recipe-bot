import React, { useState } from "react";
import css from "./RecipeDetails.module.css";

const RecipeDetails = (props) => {
  const { recipes } = props;
  const time = recipes.readyInMinutes;
  const calories = recipes.nutrition.nutrients[0].amount;
  const protiens = recipes.nutrition.nutrients[8].amount;
  const carbs = recipes.nutrition.nutrients[3].amount;
  const fats = recipes.nutrition.nutrients[1].amount;
  const ingredientsArray = recipes.nutrition.ingredients.map(
    (ingredient, index) => {
      return <p key={index}>{ingredient.name}</p>;
    }
  );

  const instructionsArray =
    recipes.analyzedInstructions[0].steps.length > 1
      ? recipes.analyzedInstructions[0].steps.map((info, index) => {
        return <p key={index}>{info.step}</p>;
      })
      : "Sorry no instructions available";

  const [instructions, setInstructions] = useState(false);
  const [ingredients, setIngredients] = useState(false);

  const showInstructions = () => {
    if (instructions) {
      setInstructions(false);
    } else {
      setInstructions(true);
    }
  };

  const showIngredients = () => {
    if (ingredients) {
      setIngredients(false);
    } else {
      setIngredients(true);
    }
  };

  return (
    <>
      <div className={css.container}>
        <div>
          <p>Ready In: {time} minutes</p>
          <p>Nutrional Information</p>
          <ul>
            <li>Calories: {Math.round(calories)} cal</li>
            <li>Protiens: {Math.round(protiens)} g</li>
            <li>Carbs: {Math.round(carbs)} g</li>
            <li>Fats: {Math.round(fats)} g</li>
          </ul>
        </div>

        <div>
          <button onClick={showIngredients}>Show Ingredients</button>
          {ingredients ? "Ingredients" : null}
          {ingredients ? ingredientsArray : null}
        </div>

        <div>
          <button onClick={showInstructions}>Show Instructions</button>
          {instructions ? "Instructions" : null}
          {instructions ? instructionsArray : null}
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
