import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../general/button";
import {connect} from 'react-redux'
import Spinner from "../general/spinner";
import { withRouter } from "react-router-dom";
import * as actions from '../../redux/actions/orderActions'

class ContactData extends Component {
  state = {
    name: null,
    city: null,
    street: null,    
  };

  componentDidUpdate(){
    if(this.props.newOrderStatus.finished && !this.props.newOrderStatus.error){
      this.props.history.replace("/orders");
    }
  }
  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };
  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };
  SaveContact = () => {
    const order = {
      userId: this.props.userId,
      orts: this.props.ingredients,
      dun: this.props.price,
      hayag: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };
  this.props.saveOrderAction(order)
  };
  render() {
    // console.log(this.props);
    return (
      <div className={css.ContactData}>
        Une:{this.props.price}
        {this.props.newOrderStatus.saving ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeName}
              type="text"
              name="name"
              placeholder="Таны нэр"
            />
            <input
              onChange={this.changeStreet}
              type="text"
              name="street"
              placeholder="Таны гэрийн хаяг"
            />
            <input
              onChange={this.changeCity}
              type="text"
              name="city"
              placeholder="Таны хот"
            />
            <Button
              text="ИЛГЭЭХ"
              btnType="Success"
              daragdsan={this.SaveContact}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    price: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupLoginReducer.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));
