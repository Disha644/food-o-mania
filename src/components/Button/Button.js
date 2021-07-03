import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button type={props.type} onClick={props.clicked} disabled={props.disabled}>{props.name}</button>
    );
}

export default Button;