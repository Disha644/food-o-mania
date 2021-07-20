import React from 'react';
import classes from './AboutUs.css';

const AboutUs = (props) => {

    const classes1 = [classes.bg, classes.bg2];
    const classes2 = [classes.bg, classes.bg3];

    return (
        <div className={classes.AboutUs}>
            <div className={classes.bg}></div>
            <div className={classes1.join(' ')}></div>
            <div className={classes2.join(' ')}></div>
            <div className={classes.content}>
                <h1>Sliding Diagonals Background Effect</h1>
            </div>
        </div>
    )
}

export default AboutUs;