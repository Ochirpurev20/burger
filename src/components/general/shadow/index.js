import React from 'react';
import css from './css.module.css';
const Shadow = (props) => {
    return props.show ? <div onClick={props.hide} className={css.Shadow}></div> : null;
};

export default Shadow;
