import React from 'react';
import MenuItem from '../MenuItem';
import css from './style.module.css';

const Menu = () => (
    <div>
        <ul className={css.Menu}>
            <MenuItem>ZAHIALGA </MenuItem>
            <MenuItem>TULBUR </MenuItem>
        </ul>
    </div>
);

export default Menu;
