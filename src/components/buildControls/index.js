import React from "react";
import { BuildControl } from "../buildControl";
import style from "./style.module.css";

export const BuildControls = (props) => {
  const controls = {
    Bacon: "Гахайн мах",
    Cheese: "Бяслаг",
    Salad: "Салад",
    Meat: "Үхрийн мах",
  };
  return (
    <div className={style.BuildControls}>
      <p>
        Бургерийн үнэ: <strong> {props.price} </strong>
      </p>
      {Object.keys(controls).map((e) => (
        <BuildControl
          key={e}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          disabled={props.disabledIngredients}
          type={e}
          orts={controls[e]}
        />
      ))}
      <button disabled={props.disabled} className={style.OrderButton}>
        Захиалах
      </button>
    </div>
  );
};
