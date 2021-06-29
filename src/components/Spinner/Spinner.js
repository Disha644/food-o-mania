import React from 'react';
import classes from './Spinner.css';

const Spinner = () => {
    return (
        <svg className={classes.Loader}>
            <circle cx="99" cy="100" r="10" />
            <circle cx="133" cy="100" r="10" />
            <circle cx="167" cy="100" r="10" />
            <circle cx="201" cy="100" r="10" />
        </svg>
    );
}

export default Spinner;