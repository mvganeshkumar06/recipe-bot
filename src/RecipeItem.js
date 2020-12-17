import React from "react";
import css from "./RecipeItem.module.css";
import { Link } from "react-router-dom";

const RecipeItem = (props) => {
  const { id, title, image } = props;
  return (
    <div className={css.recipeItemContainer}>
      <h3 className={css.title}>{title}</h3>
      <img src={`${image}`} alt="food" className={css.img} />
      <button className={css.btn}>
        <Link
          className={css.link}
          to={`/recipedetails/${id}`}
        >
          Show Details
          </Link>
      </button>
    </div>
  );
};

export default RecipeItem;
