import React from 'react';
import classes from './Footer.css';

const Footer = (props) => {
    return (
        <footer className={classes.Footer}>

            <i class="fab fa-twitter footer-icons"></i>
            <i class="fab fa-facebook-f footer-icons"></i>
            <i class="fab fa-instagram footer-icons"></i>
            <i class="fas fa-envelope footer-icons"></i>

            <p>Made with <i class="far fa-heart" style={{ color: 'rgb(253, 75, 75)', margin: 'auto' }}></i> in India</p>
            <p>All the <i class="far fa-copyright" style={{ fontSize: 'small', margin: 'auto' }}></i> Copyrights are reserved by Food-o-Mania</p>

        </footer>
    );
}

export default Footer;