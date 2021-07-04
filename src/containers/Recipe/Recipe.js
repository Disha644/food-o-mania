import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Spinner from '../../components/Spinner/Spinner'
import { getRecipe } from '../../store/actions/index';
import classes from './Recipe.css';

const Recipe = (props) => {

    const { url } = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.dir.recipe);
    const loading = useSelector(state => state.dir.loading);
    const error = useSelector(state => state.dir.error);

    useEffect(() => {
        dispatch(getRecipe(url));
    }, [dispatch, url]);

    console.log(recipe);

    return (
        <div className={classes.Recipe}>
            {recipe ? (
                <>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt="recipe_img" />
                    <p className={classes.title}>Ingredients</p>
                    <ul>
                        {recipe.extendedIngredients.map(ing => <li key={ing.originalString}>{ing.originalString}</li>)}
                    </ul>
                    <p className={classes.title}>Recipe</p>
                    <p>{recipe.instructions}</p>
                </>
            )
                : (loading ? <Spinner /> : <p className={classes.error}>{error}</p>)
            }
        </div>
    );
}

export default Recipe;