import React from 'react';
import {connect } from 'react-redux'

import Button from '../general/button';

const OrderSummary = (props) => {
    return (
        <div>
            <h3>tanii zahialga</h3>
            <p>tanii songoltuud</p>
            <ul>
                {Object.keys(props.ingredients).map((el) => (
                    <li key={el}>
                        {' '}
                        {props.ingredientsNames[el]}: {props.ingredients[el]}
                    </li>
                ))}
            </ul>
            <p>zahialgiin dun: {props.price} $</p>
            <Button daragdsan={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ" />
            <Button daragdsan={props.onContinue} btnType="Success" text="ҮРГЭЛЖЛҮҮЛЭХ" />
        </div>
    );
};
const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        ingredientsNames: state.ingredientNames,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(OrderSummary);
