import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import classes from './AddPost.css';

import { savePost } from '../../store/actions';

const AddPost = (props) => {

    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.userId)
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');

    const setTitleHandler = (event) => {
        setTitle(event.target.value)
    }

    const setImageHandler = (image) => {
        setImage(image)
    }

    const setContentHandler = (text) => {
        setContent(text)
    }

    const savePostHandler = (userId, title, image, content) => {
        dispatch(savePost(userId, title, image, content))
    }

    return (
        <div className={classes.AddPost}>
            <h2>Create Post</h2>
            <form onSubmit={event => savePostHandler(userId, title, image, content)}>
                <Input type="text" placeholder="Post Title" changed={setTitleHandler} />
                <textarea name='Enter Text Here...' rows='4' cols='50' placeholder="Write a caption.." onChange={e => setContentHandler(e.target.value)}></textarea>
                <input
                    type="file"
                    className={classes.inputFile}
                    accept="image/png, image/jpeg"
                    onChange={e => setImageHandler(e.target.files[0])}
                />
                <Button name="Submit" type="submit" />
            </form>
        </div>
    );
}

export default AddPost;