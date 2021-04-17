import React from 'react';
import { NavLink } from 'react-router-dom'

import Logo from '../Logo/Logo';
import classes from './NavigationBar.css';

const NavigationBar = (props) => {
    return (
        <div className={classes.NavigationBar}>
            <Logo />
            <div>
                <NavLink to="/">Search Recipes</NavLink>
                <NavLink to="/meal-planner">Plan Meals</NavLink>
            </div>
        </div>
    );
}

export default NavigationBar;