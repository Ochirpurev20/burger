import React, { Component } from 'react';
import Burger from '../../components/Burger';
import { BuildControls } from '../../components/buildControls';
import Modal from '../../components/general/modal';
import OrderSummary from '../../components/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/general/spinner';

const INGREDIENT_PRICE = { Salad: 200, Cheese: 300, Bacon: 500, Meat: 1000 };
const INGREDIENT_NAMES = {
    Bacon: 'Гахайн мах',
    Cheese: 'Бяслаг',
    Salad: 'Салад',
    Meat: 'Үхрийн мах',
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
        for (let orts in this.state.ingredients) {
            params.push(orts + '=' + this.state.ingredients[orts]);
        }
        params.push('dun=' + this.state.totalPrice);
        const query = params.join('&');
        // console.log(query);
        this.props.history.push({
            pathname: '/ship',
            search: query,
        });
        this.closeConfirmModal();
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
                <Modal show={this.state.confirmOrder} hide={this.closeConfirmModal}>
                    {this.state.loading ? (
                        <Spinner />
                    ) : (
                        <OrderSummary
                            onCancel={this.closeConfirmModal}
                            onContinue={this.continueOrder}
                            price={this.state.totalPrice}
                            ingredientsNames={INGREDIENT_NAMES}
                            ingredients={this.state.ingredients}
                        />
                    )}
                </Modal>

                <Burger orts={this.state.ingredients} />
                <BuildControls
                    showConfirmModal={this.showConfirmModal}
                    ingredientsNames={INGREDIENT_NAMES}
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
