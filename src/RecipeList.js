import React from "react";
import RecipeItem from "./RecipeItem";
import css from "./RecipeList.module.css";

const RecipeList = (props) => {
  const { recipes } = props;
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
