import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// import Modal from '../../components/Modal/Modal';
// import Button from '../../components/Button/Button';
// import Input from '../../components/Input/Input';
// import Spinner from '../../components/Spinner/Spinner';
// import FoodCard from '../../components/FoodCard/FoodCard';
// import Background from '../../assets/mealPlannerBackground.png';
import { getUserData } from '../../store/actions/index';
// import classes from './Profile.css';


const Profile = (props) => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.profile.userData)
    const userId = useSelector(state => state.auth.userId)


    

    useEffect(() => {
        dispatch(getUserData(userId));
    },[dispatch,userId])
    return (
        <div >
            <h1>Name : {userData}</h1>
            <Tabs>
                <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Profile;