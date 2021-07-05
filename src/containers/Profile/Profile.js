import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import Modal from '../../components/Modal/Modal';
// import Button from '../../components/Button/Button';
// import Input from '../../components/Input/Input';
// import Spinner from '../../components/Spinner/Spinner';
// import FoodCard from '../../components/FoodCard/FoodCard';
// import Background from '../../assets/mealPlannerBackground.png';
// import { getMealPlan, setCalories, setStatus, setLoader, setDietType, setMealOfTheDay } from '../../store/actions/index';
import classes from './Profile.css';


const Profile = (props) => {


    return (
        <div className={classes.Profile}>
            <div className={classes.Slider}>
                <section>
                    <h1 >My Meals</h1>
                </section>
                <section>
                    <h1>Add a Post</h1>
                </section>
                <section>
                    <h1>View Posts</h1>
                </section>
            </div>    
        </div>
    );
}

export default Profile;