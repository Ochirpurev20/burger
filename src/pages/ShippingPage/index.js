import React, { Component } from "react";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/general/button";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";
import { connect } from "react-redux";

class ShippingPage extends Component {
  
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
          <strong>Дүн: {this.props.price}</strong>
        </p>
        <Burger orts={this.props.ingredients} />
        <Button daragdsan={this.goBack} btnType="Danger" text="Буцах" />
        <Button
          daragdsan={this.showContact}
          btnType="Success"
          text="МЭДЭЭЛЭЛ ОРУУЛАХ"
        />
        <Route path="/ship/contact">
          {" "}
          <ContactData
          />{" "}
        </Route>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    price: state.burgerReducer.totalPrice
  }
}

export default connect(mapStateToProps)(ShippingPage);
