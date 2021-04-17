import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button onClick={props.clicked}>{props.name}</button>
    );
}

export default Button;