import React from 'react';
import classes from './Layout.css';

import NavigationBar from '../NavigationBar/NavigationBar';

const Layout = (props) => {
    return (
        <div>
            <NavigationBar />
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;