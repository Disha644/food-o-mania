import React, { useState } from 'react';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Spinner from '../../components/Spinner/Spinner';
import FoodCard from '../../components/FoodCard/FoodCard';
import classes from './MealPlanner.css'
import axios from '../../spoonacular-data-axios';
import Background from '../../assets/mealPlannerBackground.png';

const API_KEY = '1e37a1ef70934d5884e2cea1bfb5fa9f';
const MealPlanner = (props) => {

    const [meals, setMeals] = useState([]);
    const [nutrients, setNutrients] = useState('');
    const [loading, setLoading] = useState(false);
    const [calories, setCalories] = useState(0);

    const setCaloriesHandler = (event) => {
        setCalories(event.target.value);
    }

    const generateDietHandler = (calories) => {
        setLoading(true);
        axios.get('/mealplanner/generate?timeFrame=day&targetCalories=' + calories + '&apiKey=' + API_KEY)
            .then((res) => {
                setLoading(false);
                //console.log(res);
                setMeals(res.data.meals);
                setNutrients(res.data.nutrients);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            })
    }

    let output = (
        <p style={{ color: 'rgb(92, 88, 88)' }}>Get a personalised diet plan today with Food-o-Mania</p>
    );
    if (loading) {
        output = <Spinner />
    }
    if (meals.length > 0) {
        output = (
            <div style={{ color: 'rgb(92, 88, 88)' }}>
                <h5>Nutrients content in your diet</h5>
                <ul>
                    <li>Fat: {Math.floor(nutrients.fat)} g</li>
                    <li>Protein: {Math.floor(nutrients.protein)} g</li>
                    <li>Calories: {Math.floor(nutrients.calories)} cals</li>
                    <li>Carbs: {Math.floor(nutrients.carbohydrates)} g</li>
                </ul>
                <div className={classes.List}>
                    {meals.map(meal => <FoodCard key={meal.id} recipe={meal} />)}
                </div>
            </div>
        )
    }

    return (
        <div className={classes.MealPlanner}>
            <div className={classes.Image} style={{ backgroundImage: `url(${Background})` }}>
                <p>Are you still struggling with planning your daily meals??</p>
                <h5>Food-o-mania is here now to make the it easy for you</h5>
                <Input type="number" placeholder="Enter Calories for today's diet" changed={setCaloriesHandler} />
                <Button name="Genrate Diet" clicked={() => generateDietHandler(calories)} />
            </div>
            {output}
        </div>
    );
}

export default MealPlanner;