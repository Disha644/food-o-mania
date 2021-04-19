import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.css';

const NavigationItems = (props) => {
    return (
        <Fragment>
            <NavLink to="/" exact activeClassName={classes.active} >Search Recipes</NavLink>
            <NavLink to="/meal-planner" activeClassName={classes.active}>Meal Planner</NavLink>
        </Fragment>
    );
}

export default NavigationItems;
