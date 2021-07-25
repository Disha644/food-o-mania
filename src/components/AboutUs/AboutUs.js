import React from 'react';

import headerImage from '../../assets/food.jpg';
import classes from './AboutUs.css';

const AboutUs = (props) => {

    return (
        <div className={classes.AboutUs}>
            <div className={classes.header}>
                <div style={{ backgroundImage: `url(${headerImage})` }} className={classes.Image}></div>
                <div class={classes.Content}>
                    <h2>Welcome to Food-o-mania!!</h2>
                    <p>A safe space for all the foodies and fitness freaks</p>
                    <p>We promote healthy and happy lifestyle</p>
                </div>
            </div>
            <div className={classes.Mission}>
                <h1>Our Mission</h1>
                <ul>
                    <li><strong>To make eating easy: </strong>With our quick and effective meal planners you no langer have to spend hours calculating calories in your diet for a day. We generate meal plans within seconds for you using the tremendous databases of Spoonacular.</li>
                    <li><strong>To provide users with supportive community: </strong>We have extremly supportive community. You can post your progress and show it to the others. Also seeing others incoprating healthy living habits in their life just like you helps you to stay motivated.</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutUs;