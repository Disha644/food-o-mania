import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './NavigationItems.css';

const NavigationItems = (props) => {

    const userId = useSelector(state => state.auth.userId);

    let links = (
        <>
            <NavLink to="/search" exact activeClassName={classes.active} >Search Recipes</NavLink>
            <NavLink to="/auth" activeClassName={classes.active}>Login</NavLink>
            
        </>
    );

    if (userId) {
        links = (
            <>
                <NavLink to="/search" exact activeClassName={classes.active} >Search Recipes</NavLink>
                <NavLink to="/meal-planner" activeClassName={classes.active}>Meal Planner</NavLink>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
                <NavLink to="/logout" activeClassName={classes.active}>Logout</NavLink>
            </>
        )
    }

    return (
        <Fragment>
            {links}
        </Fragment>
    );
}

export default NavigationItems;
