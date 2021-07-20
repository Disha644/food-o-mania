import React, {useRef,useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";

import updatePic from '../../assets/new_upload.png'
import Spinner from '../../components/Spinner/Spinner';
import MealCard from '../../components/MealCard/MealCard';
import TabPanel, { a11yProps, useStyles } from './TabPanel/TabPanel';
import { getUserData, updateImage, getUserDiet } from '../../store/actions/index';
import classes from './Profile.css';

const Profile = (props) => {

    const hiddenImageInput = useRef(null);
    const dispatch = useDispatch();
    let userData = useSelector(state => state.profile.userData);
    const userId = useSelector(state => state.auth.userId);
    const userDiet = useSelector(state => state.profile.userDiet)
    const [value, setValue] = useState(0);
    const tabStyles = useStyles();
    
    useEffect (() => {
        dispatch(getUserData(userId))
        dispatch(getUserDiet(userId))
    },[]) // eslint-disable-line react-hooks/exhaustive-deps


    const uploadImage = (image, userId) => {
        dispatch(updateImage(image, userId));
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className={classes.Profile}>
            {userData ? (
                <>
                    <div className={classes.header}>
                        <div className={classes.profilePic} onClick={() => hiddenImageInput.current.click()}>
                            <img src={userData.profilePic} alt="profile_pic" className={classes.image1} />
                            <img src={updatePic} alt="update_pic" className={classes.image2} />
                            <input
                                type="file"
                                name="filename"
                                accept="image/png, image/jpeg"
                                onChange={e => uploadImage(e.target.files[0], userId)}
                                ref={hiddenImageInput}
                            />
                        </div>
                        <div>
                            <h1>{userData.name}</h1>
                            <p>{userData.email}</p>
                        </div>
                        <div>
                            <h1>Add A Post</h1>
                            <Link to='/add-a-post'> Click Here</Link>
                        </div>
                    </div>

                    <div className={tabStyles.root}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="My Meal" {...a11yProps(0)}/>
                                <Tab label="Posts" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0} >
                            {
                                userDiet.length > 0 ?
                                    <>
                                        {userDiet.map( meals => 
                                        <ul key={meals.id}>
                                            {
                                                meals.data().meals.map(meal => 
                                                <div key={meal.id}>
                                                <img src={'https://spoonacular.com/recipeImages/' + meal.id + '-556x370.' + meal.imageType}
                                                style={{width:'5%',height:'5%'}}
                                                alt="recipe_image" />
                                                <li >{meal.title}</li>
                                                </div>)
                                            }
                                        </ul>)} 
                                    </>:
                                <p>You Don't Have Any Saved Diets.</p>
                            }
                            <MealCard />
                            <MealCard />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Posts
                        </TabPanel>
                    </div>
                </>
            ) : <Spinner />}
        </div>
    );
}

export default Profile;