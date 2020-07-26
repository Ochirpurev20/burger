import React from 'react';
import css from './style.module.css';
import Logo from '../Logo';
import Menu from '../Menu';
import Shadow from '../general/shadow';

const SideBar = (props) => {
    let classes = [css.SideBar, css.Close];
    if (props.showSideBar) {
        classes = [css.SideBar, css.Open];
    }
    return (
        <div onClick={props.toggleSideBar}>
            <Shadow show={props.showSideBar} />
            <div className={classes.join(' ')}>
                <div className={css.logo}>
                    <Logo />
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SideBar;
