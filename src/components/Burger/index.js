import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";

const Burger = (props) => {
  // console.log(props.orts);
  const orts2 = Object.entries(props.orts);
  // console.log(orts2);
  // console.log("orts2 n type===", typeof orts2);
  let content = [];
  orts2.map((e) => {
    for (let i = 0; i < e[1]; i++) {
      content.push(<BurgerIngredient key={`${e[0]}${i}`} type={e[0]} />);
    }
  });
  if (content.length === 0) content = <p>ortsoo songo</p>;
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="BreadTop" />
      {content}
      <BurgerIngredient type="BreadBottom" />
    </div>
  );
};

export default Burger;
