import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import updatePic from '../../assets/new_upload.png'
import Spinner from '../../components/Spinner/Spinner';
import { getUserData, updateImage } from '../../store/actions/index';
import classes from './Profile.css';


const Profile = (props) => {

    const hiddenImageInput = useRef(null);
    const dispatch = useDispatch();
    const userData = useSelector(state => state.profile.userData);
    const userId = useSelector(state => state.auth.userId);

    useEffect(() => {
        dispatch(getUserData(userId));
    }, [dispatch, userId])

    const uploadImage = (image, userId) => {
        dispatch(updateImage(image, userId));
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
                </>
            ) : <Spinner />}
        </div>
    );
}

export default Profile;