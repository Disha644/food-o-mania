import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'

import Menu from '../Menu/Menu';
import classes from './NavigationBar.css';

const NavigationBar = (props) => {
    return (
        <div className={classes.NavigationBar}>
            <Menu clicked={props.open} />
            <h3>Food-o-Mania</h3>
            <div className={classes.NavigationItems}>
                <NavigationItems />
            </div>
        </div>
    );
}

export default NavigationBar;