import React, { useState, useEffect } from 'react';

import Spinner from '../../components/Spinner/Spinner';
import Recipe from '../../components/Recipe/Recipe'
import axios from '../../spoonacular-data-axios';
import classes from './RecipeList.css';

const API_KEY = '6f84908876b94fdebedbdb4dff8fedad';
const RecipeList = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        axios.get('/recipes/random?number=10&tags=vegetarian&apiKey=' + API_KEY)
            .then((res) => {
                //console.log(res.data.recipes);
                setLoading(false);
                setRecipes(res.data.recipes);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            })
    }, []);

    const valueChangeHandler = (event) => {
        setSearchValue(event.target.value);
        axios.get('/recipes/autocomplete?addRecipeInformation=true&number=10&query=' + event.target.value + '&apiKey=' + API_KEY)
            .then((res) => {
                //console.log(res);
                setRecipes(res.data);
            })
    }

    const searchHandler = (searchValue) => {

        setLoading(true);
        axios.get('/recipes/complexSearch?addRecipeInformation=true&query=' + searchValue + '&apiKey=' + API_KEY)
            .then((res) => {
                //console.log(res);
                setLoading(false);
                setRecipes(res.data.results);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err)
            })
    }

    let output = <p style={{ color: 'white' }}> No recipes found!!</p >
    if (loading) {
        output = <Spinner />
    }
    if (recipes.length > 0) {
        output = recipes.map(r => <Recipe key={r.id} recipe={r} />);
    }

    return (
        <div className={classes.RecipeList}>
            <input type="text" placeholder="Search your favorite recipes" onChange={valueChangeHandler} />
            <button onClick={() => searchHandler(searchValue)}>Search</button>
            <div className={classes.List}>
                {output}
            </div>
        </div>
    );
}

export default RecipeList;