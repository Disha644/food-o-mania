import React from 'react';
import classes from './MealCard.css';
import Photo from '../../assets/searchRecipesBackground.jpg'
// src\assets\

const MealCard = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.Card}>
                <div className={classes.ImgBx}>
                    <img src={Photo} alt='meal-pic' ></img>
                </div>
                <div className={classes.Content}>
                    <h2>Card One</h2>
                    <p>Paragraph</p>
                </div>
            </div>
            <div className={classes.Card}>
                <div className={classes.ImgBx}>
                    <img src={Photo} alt='meal-pic' ></img>
                </div>
                <div className={classes.Content}>
                    <h2>Card Two</h2>
                    <p>Paragraph</p>
                </div>
            </div>
            <div className={classes.Card}>
                <div className={classes.ImgBx}>
                    <img src={Photo} alt='meal-pic' ></img>
                </div>
                <div className={classes.Content}>
                    <h2>Card Three</h2>
                    <p>Paragraph</p>
                </div>
            </div>
        </div>
    );
}

export default MealCard;