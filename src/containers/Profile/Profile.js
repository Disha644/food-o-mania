import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";

import updatePic from '../../assets/new_upload.png'
import Spinner from '../../components/Spinner/Spinner';
import TabPanel, { a11yProps, useStyles } from './TabPanel/TabPanel';
import { getUserData, updateImage } from '../../store/actions/index';
import classes from './Profile.css';

const Profile = (props) => {

    const hiddenImageInput = useRef(null);
    const dispatch = useDispatch();
    const userData = useSelector(state => state.profile.userData);
    const userId = useSelector(state => state.auth.userId);
    const [value, setValue] = useState(0);
    const tabStyles = useStyles();

    useEffect(() => {
        dispatch(getUserData(userId));
    }, [dispatch, userId])

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
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            Item One
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                    </div>
                </>
            ) : <Spinner />}
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