import React, { useState, useEffect } from 'react';

import Spinner from '../../components/Spinner/Spinner';
import FoodCard from '../../components/FoodCard/FoodCard'
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import axios from '../../spoonacular-data-axios';
import Background from '../../assets/searchRecipesBackground.jpg';
import classes from './RecipeList.css';

const API_KEY = '1e37a1ef70934d5884e2cea1bfb5fa9f';
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

    let output = <p style={{ color: 'rgb(92, 88, 88)' }}> No recipes found!!</p >
    if (loading) {
        output = <Spinner />
    }
    if (recipes.length > 0) {
        output = recipes.map(r => <FoodCard key={r.id} recipe={r} />);
    }

    return (
        <div className={classes.RecipeList}>
            <div className={classes.Image} style={{ backgroundImage: `url(${Background})` }}>
                <h5>Welcome to Food-o-mania!!</h5>
                <p>Favourite place for all the foodies</p>
                <Input type="text" placeholder="Search your favourite recipes" changed={valueChangeHandler} />
                <Button name="Search" clicked={() => searchHandler(searchValue)} />
            </div>
            <div className={classes.List}>
                {output}
            </div>
        </div>
    );
}

export default RecipeList;