import React, { Fragment } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../Backdrop/Backdrop';
import background1 from '../../../assets/SideBar1.jpg';
import background2 from '../../../assets/Sidebar2.jpg';
import classes from './SideDrawer.css';

const SideBar = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.sideDrawerOpen) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Fragment>
            <Backdrop clicked={props.close} show={props.sideDrawerOpen} />
            <div className={attachedClasses.join(' ')} onClick={props.close}>
                <img src={background1} alt="smootie_bowl" />
                <NavigationItems />
                <img src={background2} alt="ice_cream" />
            </div>
        </Fragment>

    )
}

export default SideBar;