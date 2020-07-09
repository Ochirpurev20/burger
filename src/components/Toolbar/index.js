import React from 'react';
import css from './style.module.css';
import Logo from '../Logo';
import Menu from '../Menu';

const Toolbar = () => (
    <header className={css.Toolbar}>
        <div>---</div>
        <Logo />
        <Menu />
    </header>
);

export default Toolbar;
