import React from "react";
import css from "./RecipeItem.module.css";
import { Link } from "react-router-dom";

const RecipeItemContext = React.createContext();

const RecipeItem = (props) => {
  const { title, image } = props;

  return (
    <RecipeItemContext.Provider value={props}>
      <div className={css.recipeItemContainer}>
        <h3 className={css.title}>{title}</h3>
        <img src={`${image}`} alt="food" className={css.img} />
        <button className={css.btn}>
          <Link className={css.link} to="/recipedetails">
            Show Details
          </Link>
        </button>
      </div>
    </RecipeItemContext.Provider>
  );
};

export { RecipeItem, RecipeItemContext };
