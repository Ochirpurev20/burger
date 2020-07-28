import React, { Component } from "react";
import Burger from "../../components/Burger";
import { BuildControls } from "../../components/buildControls";
import Modal from "../../components/general/modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/general/spinner";
import { connect } from "react-redux";
import * as action from '../../redux/actions/burgerActions'

const INGREDIENT_PRICE = { Salad: 200, Cheese: 300, Bacon: 500, Meat: 1000 };
const INGREDIENT_NAMES = {
  Bacon: "Гахайн мах",
  Cheese: "Бяслаг",
  Salad: "Салад",
  Meat: "Үхрийн мах",
};

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
    confirmOrder: false,
    loading: false,
  };
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };
  componentDidMount = () => {};
  continueOrder = () => {
    const params = [];
    for (let orts in this.props.burgeriinOrtsoo) {
      params.push(orts + "=" + this.props.burgeriinOrtsoo[orts]);
    }
    params.push("dun=" + this.props.niitUnee);
    const query = params.join("&");
    // console.log(query);
    this.props.history.push({
      pathname: "/ship",
      search: query,
    });
    this.closeConfirmModal();
  };
  ortsNemeh = (type) => {
    const newingredients = { ...this.props.burgeriinOrtsoo };
    newingredients[type]++;
    const newPrice = this.props.niitUnee + INGREDIENT_PRICE[type];
    this.setState({
      purchasing: true,
      ingredients: newingredients,
      totalPrice: newPrice,
    });
  };
  ortsHasah = (type) => {
    if (this.props.burgeriinOrtsoo[type] > 0) {
      const newingredients = { ...this.props.burgeriinOrtsoo };
      newingredients[type]--;
      const newPrice = this.props.niitUnee - INGREDIENT_PRICE[type];
      this.setState({
        purchasing: newPrice > 1000,
        ingredients: newingredients,
        totalPrice: newPrice,
      });
    }
  };
  render() {
    console.log("burgerpage s props: ", this.props);
    const disabledIngredients = { ...this.props.burgeriinOrtsoo };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Modal show={this.state.confirmOrder} hide={this.closeConfirmModal}>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              price={this.props.niitUnee}
              ingredientsNames={INGREDIENT_NAMES}
              ingredients={this.props.burgeriinOrtsoo}
            />
          )}
        </Modal>

        <Burger orts={this.props.burgeriinOrtsoo} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={INGREDIENT_NAMES}
          disabled={!this.state.purchasing}
          price={this.props.niitUnee}
          disabledIngredients={disabledIngredients}
          ortsNemeh={this.props.ortsNem}
          ortsHasah={this.props.ortsHas}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burgeriinOrtsoo: state.ingredients,
    niitUnee: state.totalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ortsNem: (ortsNer) => dispatch(action.addIngredient(ortsNer)),
    ortsHas: (ortsNer) => dispatch( action.removeIngredient(ortsNer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
