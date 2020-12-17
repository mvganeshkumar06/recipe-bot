import React, { useState } from "react";
import css from "./RecipeDetails.module.css";
import { useParams } from "react-router-dom";

const RecipeDetails = (props) => {
  const { recipes } = props;
  const { id } = useParams();
  const recipe = recipes.find((item) => {
    return item.id === parseInt(id);
  });
  const title = recipe.title;
  const image = recipe.image;
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
    <div className={css.container}>
      <div className={css.item}>
        <p className={css.head}>{title}</p>
        <img src={`${image}`} alt="food" className={css.img} />
        <p>Ready In: {time} minutes</p>

        <p className={css.head}>Nutrional Information</p>
        <ul>
          <li>Calories: {Math.round(calories)} cal</li>
          <li>Protiens: {Math.round(protiens)} g</li>
          <li>Carbs: {Math.round(carbs)} g</li>
          <li>Fats: {Math.round(fats)} g</li>
        </ul>

        <button className={css.btn} onClick={showIngredients}>{ingredients ? "Hide " : "Show "} Ingredients</button>

        <p className={css.head}>{ingredients && "Ingredients"}</p>
        <ul>{ingredients && ingredientsArray.map((item) => {
          return <li>{item}</li>;
        })}</ul>

        <button className={css.btn} onClick={showInstructions}>{instructions ? "Hide " : "Show "}  Instructions</button>

        <p className={css.head}>{instructions && "Instructions"}</p>
        <ul>{instructions && instructionsArray.map((item) => {
          return <li>{item}</li>;
        })}</ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
