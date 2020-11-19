import React, { useState, useContext } from "react";
import { RecipeItemContext } from "./RecipeItem";

const RecipeDetails = () => {
  const {
    time,
    calories,
    protiens,
    carbs,
    fats,
    ingredientsArray,
    instructionsArray,
  } = useContext(RecipeItemContext);

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
      <div className="col-2">
        <br /> <br />
        Ready In: {time} minutes
        <br /> <br />
        Nutrional Information
        <br />
        <br />
        Calories: {Math.round(calories)} cal
        <br />
        Protiens: {Math.round(protiens)} g
        <br />
        Carbs: {Math.round(carbs)} g
        <br />
        Fats: {Math.round(fats)} g
        <br /> <br />
      </div>

      <div className="col-3">
        <button className="btn" onClick={showIngredients}>
          Show Ingredients
        </button>
        <br />
        <br />

        {ingredients ? "Ingredients" : null}
        <br />
        <br />

        {ingredients ? ingredientsArray : null}
      </div>

      <div className="col-4">
        <button className="btn" onClick={showInstructions}>
          Show Instructions
        </button>
        <br />
        <br />

        {instructions ? "Instructions" : null}
        <br />
        <br />

        {instructions ? instructionsArray : null}
      </div>
    </>
  );
};

export default RecipeDetails;
