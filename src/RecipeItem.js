import React from "react";
import css from "./RecipeItem.module.css";

const RecipeItem = (props) => {
  const { id, title, image } = props;
  return (
    <>
      <div className={css.recipeItemContainer}>
        <h3 className={css.title}>{title}</h3>
        <img src={`${image}`} alt="food" className={css.img} />
        <button className={css.btn}>
          <a className={css.link} href={`/${id}`} target="_blanck">
            Show Details
          </a>
        </button>
      </div>
    </>
  );
};

export default RecipeItem;
