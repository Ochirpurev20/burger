import React, { Component } from "react";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/general/button";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";

class ShippingPage extends Component {
  state = {
    ingredients: {},
    price: 0,
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingre = {};
    let price;
    for (let orts of query.entries()) {
      if (orts[0] !== "dun") ingre[orts[0]] = orts[1];
      else price = orts[1];
    }
    this.setState({ ingredients: ingre, price });
  }
  goBack = () => {
    this.props.history.goBack();
  };
  showContact = () => {
    this.props.history.replace("/ship/contact");
  };
  render() {
    return (
      <div className={css.ShippingPage}>
        <p>
          <strong>Дүн: {this.state.price}</strong>
        </p>
        <Burger orts={this.state.ingredients} />
        <Button daragdsan={this.goBack} btnType="Danger" text="Буцах" />
        <Button
          daragdsan={this.showContact}
          btnType="Success"
          text="МЭДЭЭЛЭЛ ОРУУЛАХ"
        />
        <Route path="/ship/contact">
          {" "}
          <ContactData
            ingredients={this.state.ingredients}
            price={this.state.price}
          />{" "}
        </Route>
      </div>
    );
  }
}

export default ShippingPage;
