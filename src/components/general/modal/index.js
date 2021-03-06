import React from 'react';
import css from './css.module.css';
import Shadow from '../shadow';

const modal = (props) => (
    <div>
        <Shadow show={props.show} hide={props.hide} />
        <div style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0' }} className={css.Modal}>
            {' '}
            {props.children}
        </div>
    </div>
);

export default modal;
