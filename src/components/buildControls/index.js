import React from 'react';
import { BuildControl } from '../buildControl';

import * as action from '../../redux/actions/burgerActions'
import {connect} from 'react-redux'
import style from './style.module.css';

const BuildControls = (props) => {
    const disabledIngredients = { ...props.burgeriinOrtsoo };
        for (let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }
    return (
        <div className={style.BuildControls}>
            <p>
                Бургерийн үнэ: <strong> {props.price} </strong>
            </p>
            {Object.keys(props.ingredientNames).map((e) => (
                <BuildControl key={e} ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} disabled={disabledIngredients} type={e} orts={props.ingredientNames[e]} />
            ))}
            <button onClick={props.showConfirmModal} disabled={props.disabled} className={style.OrderButton}>
                Захиалах
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        burgeriinOrtsoo: state.burgerReducer.ingredients,
        price: state.burgerReducer.totalPrice,
        purchasing: state.burgerReducer.purchasing,
        ingredientNames: state.burgerReducer.ingredientNames
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        ortsNemeh: (ortsNer) => dispatch(action.addIngredient(ortsNer)),
        ortsHasah: (ortsNer) => dispatch(action.removeIngredient(ortsNer)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);