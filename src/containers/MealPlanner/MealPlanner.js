import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Spinner from '../../components/Spinner/Spinner';
import FoodCard from '../../components/FoodCard/FoodCard';
import Background from '../../assets/mealPlannerBackground.png';
import { getMealPlan, setCalories, setDietType, setMealOfTheDay } from '../../store/actions/index';
import classes from './MealPlanner.css';


const MealPlanner = (props) => {

    const dispatch = useDispatch();
    const [touched, setTouched] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [mealTitle, setMealTitle] = useState('');
    const [mealDay,setMealDay] = useState('');
    const meals = useSelector(state => state.mealPlanner.meals);
    const nutrients = useSelector(state => state.mealPlanner.nutrients);
    const loading = useSelector(state => state.mealPlanner.loading);
    const calories = useSelector(state => state.mealPlanner.calories);
    const dietType = useSelector(state => state.mealPlanner.dietType);
    const userId = useSelector(state => state.auth.userId)

    const setCaloriesHandler = (event) => {
        dispatch(setCalories(event.target.value));
        setTouched(true);
    }

    const setDietTypeHandler = (event) => {
        dispatch(setDietType(event.target.value));
    }

    const generateDietHandler = (calories, dietType) => {
        dispatch(getMealPlan(calories, dietType));
    }

    const openModalHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    const setMealTitleHandler = (event) => {
        setMealTitle(event.target.value);
    }

    const setMealDayHandler = (event) => {
        setMealDay(event.target.value);
    }

    const setMeal = (userId,meals,mealTitle,mealDay) =>{
        dispatch(setMealOfTheDay(userId,meals.map(meal => meal.title),mealTitle,mealDay));
        closeModalHandler()
    }


    let modal = null;
    if (showModal) {
        modal = <Modal close={closeModalHandler} show={showModal}>
            <Input type="text" placeholder="Enter Name for the Meal" changed={setMealTitleHandler} />
            <Input type="text" placeholder="Enter Day for the Meal" changed={setMealDayHandler} />
            <div className={classes.List}>
                    {meals.map(meal => <li key={meal.id}>{meal.title}</li>)}
            </div> 
            <Button name="Save"
                    clicked={() => setMeal(userId,meals,mealTitle,mealDay)} 
            />  
        </Modal>
    }

    let output = (
        <p style={{ color: 'rgb(92, 88, 88)', marginTop: '30px' }}>Get a personalised diet plan today with Food-o-Mania</p>
    );
    if (loading) {
        output = <Spinner />
    }

    if (meals.length > 0) {
        output = (
            <div style={{ color: 'rgb(92, 88, 88)', marginTop: '20px' }}>
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
                {modal}
                <p>Are you still struggling with planning your daily meals??</p>
                <h5>Food-o-mania is here now to make the it easy for you</h5>
                <Input
                    type="number"
                    placeholder="Enter Calories for today's diet"
                    changed={setCaloriesHandler}
                    showError={touched && calories < 250}
                />

                <select onChange={setDietTypeHandler} defaultValue="">
                    <option value="">Non-Vegetarian</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                </select>


                <Button
                    name="Genrate Diet"
                    clicked={() => generateDietHandler(calories, dietType)}
                    disabled={calories < 250} />
                <Button className={classes.button2} name="Save Meal Plan" clicked={openModalHandler} />


                {
                    touched && calories < 250 ?
                        <p className={classes.warn}>**Please enter minimum 250 calories**</p> : null
                }
            </div>
            {output}
        </div>
    );
}

export default MealPlanner;