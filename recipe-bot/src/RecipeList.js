import React, { useContext } from "react";
import RecipeItem from "./RecipeItem";
import css from "./RecipeList.module.css";
import { AppContext } from "./App";

const RecipeList = () => {
  const recipes = useContext(AppContext);
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
        />
      );
    });
  }

  return <div className={css.list}>{RecipeArray}</div>;
};

export default RecipeList;
