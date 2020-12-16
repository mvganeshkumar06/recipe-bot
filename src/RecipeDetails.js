import React, { useState } from "react";
import css from "./RecipeDetails.module.css";
import { useParams } from "react-router-dom";

const RecipeDetails = (props) => {
  const { recipes } = props;
  const { recipeID } = useParams();
  const recipe = recipes.find((item) => {
    return item.id === parseInt(recipeID);
  });
  const time = recipe.readyInMinutes;
  const calories = recipe.nutrition.nutrients[0].amount;
  const protiens = recipe.nutrition.nutrients[8].amount;
  const carbs = recipe.nutrition.nutrients[3].amount;
  const fats = recipe.nutrition.nutrients[1].amount;
  const ingredientsArray = recipe.nutrition.ingredients.map(
    (ingredient, index) => {
      return <p key={index}>{ingredient.name}</p>;
    }
  );

  const instructionsArray =
    recipe.analyzedInstructions[0].steps.length > 1
      ? recipe.analyzedInstructions[0].steps.map((info, index) => {
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
