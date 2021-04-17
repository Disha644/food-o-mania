import React, { useState, useEffect } from 'react';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import classes from './MealPlanner.css'

const MealPlanner = (props) => {

    const [meals, setMeals] = useState([]);

    return (
        <div className={classes.MealPlanner}>
            <p>Are you still struggling with planning your daily meals??</p>
            <h5>Food-o-mania is here now to make the it easy for you</h5>
            <Input type="number" placeholder="Enter Calories for today's diet" />
            <Button name="Genrate Diet" />
        </div>
    );
}

export default MealPlanner;