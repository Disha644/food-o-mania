import React, { useEffect, useState } from 'react';

import classes from './Post.css'
import { firestore } from '../../firebase';
import { useSelector } from 'react-redux';

const Post = (props) => {

    const [username, setUsername] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const loggedInUserId = useSelector(state => state.auth.userId);

    useEffect(() => {
        firestore.collection('users').where('userId', '==', props.userId).get()
            .then(res => {
                res.forEach(doc => {
                    setUsername(doc.data().name);
                    setProfilePic(doc.data().profilePic);
                })
            });
    }, [props.userId]);

    return (
        <div className={classes.Post}>
            <div>
                <img className={classes.profilePic} src={profilePic} alt="profile_pic" />
                <p className={classes.name}>{username}</p>
                {props.userId === loggedInUserId ?
                    <i className="far fa-trash-alt" style={{ marginLeft: 'auto', cursor: 'pointer' }}></i> : null}
            </div>
            <img src={props.imageUrl} alt="post" />
            <p className={classes.title}>{props.title}</p>
            <p className={classes.content}>{props.content}</p>
        </div>
    )
}

export default Post;