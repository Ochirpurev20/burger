import React from 'react';
import { BuildControl } from '../buildControl';
import style from './style.module.css';

export const BuildControls = (props) => {
    return (
        <div className={style.BuildControls}>
            <p>
                Бургерийн үнэ: <strong> {props.price} </strong>
            </p>
            {Object.keys(props.ingredientsNames).map((e) => (
                <BuildControl key={e} ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} disabled={props.disabledIngredients} type={e} orts={props.ingredientsNames[e]} />
            ))}
            <button onClick={props.showConfirmModal} disabled={props.disabled} className={style.OrderButton}>
                Захиалах
            </button>
        </div>
    );
};
