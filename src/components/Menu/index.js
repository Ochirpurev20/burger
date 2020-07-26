import React from 'react';
import MenuItem from '../MenuItem';
import css from './style.module.css';

const Menu = () => (
    <div>
        <ul className={css.Menu}>
            <MenuItem exact link="/">
                ШИНЭ ЗАХИАЛГА{' '}
            </MenuItem>
            <MenuItem link="/orders">ЗАХИАЛГУУД </MenuItem>
        </ul>
    </div>
);

export default Menu;
