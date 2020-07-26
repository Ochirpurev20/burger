import React, { Component } from 'react';
import css from './style.module.css';
import Button from '../general/button';
import axios from '../../axios-orders';
import Spinner from '../general/spinner';

class ContactData extends Component {
    state = {
        name: null,
        city: null,
        street: null,
        loading: false,
    };
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
            orts: this.props.ingredients,
            dun: this.props.totalPrice,
            hayag: {
                name: this.state.name,
                city: this.state.city,
                street: this.state.street,
            },
        };
        this.setState({ loading: true });
        axios
            .post('/orders.json', order)
            .then((res) => {
                console.log('amjilltai');
            })
            .catch((err) => {
                console.log('amjiltgui' + err);
            })
            .finally(() => {
                this.setState({ loading: false });
                this.props.history.replace('/orders');
            });
    };
    render() {
        return (
            <div className={css.ContactData}>
                {this.state.loading ? (
                    <Spinner />
                ) : (
                    <div>
                        <input onChange={this.changeName} type="text" name="name" placeholder="Таны нэр" />
                        <input onChange={this.changeStreet} type="text" name="street" placeholder="Таны гэрийн хаяг" />
                        <input onChange={this.changeCity} type="text" name="city" placeholder="Таны хот" />
                        <Button text="ИЛГЭЭХ" btnType="Success" daragdsan={this.SaveContact} />
                    </div>
                )}
            </div>
        );
    }
}

export default ContactData;
