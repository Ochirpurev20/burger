import React, { Component } from "react";
import Burger from "../../components/Burger";
import { BuildControls } from "../../components/buildControls";

const INGREDIENT_PRICE = { Salad: 200, Cheese: 300, Bacon: 500, Meat: 1000 };
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad: 0,
      Cheese: 0,
      Bacon: 0,
      Meat: 0,
    },
    totalPrice: 1000,
    purchasing: false,
  };
  ortsNemeh = (type) => {
    const newingredients = { ...this.state.ingredients };
    newingredients[type]++;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({
      purchasing: true,
      ingredients: newingredients,
      totalPrice: newPrice,
    });
  };
  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newingredients = { ...this.state.ingredients };
      newingredients[type]--;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
      this.setState({
        purchasing: newPrice > 1000,
        ingredients: newingredients,
        totalPrice: newPrice,
      });
    }
  };
  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Burger orts={this.state.ingredients} />
        <BuildControls
          disabled={!this.state.purchasing}
          price={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
