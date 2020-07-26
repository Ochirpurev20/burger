import React from "react";
import css from "./style.module.css";
const Order = (props) => {
  // console.log(props.order);
  return (
    <div className={css.Order}>
      <p>
        {" "}
        Нэр, хаяг: {props.order.hayag.name} | {props.order.hayag.city} |{" "}
        {props.order.hayag.street}{" "}
      </p>
      <p>
        {" "}
        Орц: Гахайн мах: {props.order.orts.Bacon} | Бяслаг:{" "}
        {props.order.orts.Cheese} | Үхрийн мах: {props.order.orts.Meat} | Салат:{" "}
        {props.order.orts.Salad}
      </p>
      <p>Дүн: {props.order.dun}</p>
    </div>
  );
};

export default Order;
