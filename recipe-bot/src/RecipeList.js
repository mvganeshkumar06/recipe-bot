import React from "react";
import { RecipeItem } from "./RecipeItem";
import css from "./RecipeList.module.css";

const RecipeList = (props) => {
  const recipes = props.values;
  let RecipeArray = [];

  if (!recipes) {
    return null;
  } else {
    RecipeArray = recipes.map((item) => {
      return (
        <RecipeItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          time={item.readyInMinutes}
          calories={item.nutrition.nutrients[0].amount}
          protiens={item.nutrition.nutrients[8].amount}
          carbs={item.nutrition.nutrients[3].amount}
          fats={item.nutrition.nutrients[1].amount}
          ingredientsArray={item.nutrition.ingredients.map(
            (ingredient, index) => {
              return <p key={index}>{ingredient.name}</p>;
            }
          )}
          instructionsArray={
            item.analyzedInstructions[0].steps.length > 1
              ? item.analyzedInstructions[0].steps.map((info, index) => {
                  return <p key={index}>{info.step}</p>;
                })
              : "Sorry no instructions available"
          }
        />
      );
    });
  }

  return <div className={css.list}>{RecipeArray}</div>;
};

export default RecipeList;
