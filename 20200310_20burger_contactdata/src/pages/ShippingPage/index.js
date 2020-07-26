import React from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import { Route } from "react-router-dom";
import css from "./style.module.css";
import ContactData from "../../components/ContactData";

export class ShippingPage extends React.Component {
  state = {
    dun: 0,

    hayag: {
      name: null,
      city: null,
      street: null
    },

    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 1,
      meat: 1
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);

    const ingredients = {};

    for (let param of query.entries()) {
      ingredients[param[0]] = param[1];
    }

    this.setState({ ingredients });
  }

  goBack = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.push("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          <strong>Таны захиалга амттай байх болно гэж найдаж байна...</strong>
        </p>

        <Burger orts={this.state.ingredients} />

        <Button
          daragdsan={this.goBack}
          btnType="Danger"
          text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        />

        <Button
          daragdsan={this.showContactData}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />

        <Route path="/ship/contact" component={ContactData} />
      </div>
    );
  }
}
