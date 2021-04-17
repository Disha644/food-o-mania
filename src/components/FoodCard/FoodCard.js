import React from 'react';
import classes from './FoodCard.css';

const FoodCard = ({ recipe }) => {

    const imageUrl = 'https://spoonacular.com/recipeImages/' + recipe.id + '-556x370.' + recipe.imageType;

    let link = ''
    if (recipe.sourceUrl) {
        link = <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">Click to view recipe</a>
    } else {
        link = <p style={{ color: 'grey' }}>Our suggestions that you may like to try</p>
    }

    return (
        <div className={classes.FoodCard}>
            <img src={imageUrl} alt="recipe_image" />
            <p>{recipe.title}</p>
            <p>Prepration time: {recipe.readyInMinutes} mins</p>
            { link}
        </div >
    );
}

export default FoodCard;