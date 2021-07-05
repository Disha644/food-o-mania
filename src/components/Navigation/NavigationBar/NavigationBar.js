import React from 'react';
import { Link } from 'react-router-dom';

import NavigationItems from '../NavigationItems/NavigationItems'
import Menu from '../Menu/Menu';
import classes from './NavigationBar.css';

const NavigationBar = (props) => {
    return (
        <div className={classes.NavigationBar}>
            <Menu clicked={props.open} />
            <Link to='/'><h3>Food-o-mania</h3></Link>
            <div className={classes.NavigationItems}>
                <NavigationItems />
            </div>
        </div>
    );
}

export default NavigationBar;