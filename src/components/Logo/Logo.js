import React from 'react';
import classes from './Logo.css';

import Image from '../../assets/Logo.png';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={Image} />
        </div>
    )
}

export default Logo;