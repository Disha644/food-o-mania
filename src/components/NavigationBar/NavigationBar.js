import React from 'react';
import { NavLink } from 'react-router-dom'

import classes from './NavigationBar.css';

const NavigationBar = (props) => {
    return (
        <div className={classes.NavigationBar}>
            <h3>Food-o-Mania</h3>
            <div>
                <NavLink to="/" exact activeClassName={classes.active} >Search Recipes</NavLink>
                <NavLink to="/meal-planner" activeClassName={classes.active}>Meal Planner</NavLink>
            </div>
        </div>
    );
}

export default NavigationBar;