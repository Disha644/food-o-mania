import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import classes from './AddPost.css';

import { savePost } from '../../store/actions';

const AddPost = (props) => {

    const dispatch = useDispatch()
    const userId = useSelector(state=> state.auth.userId)
    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
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
        <div className={classes}>
            <label>Title</label> &nbsp;
            <Input type="text" placeholder="Post Title" changed={setTitleHandler} />
            <br></br>
            <br></br>
            <label>Upload Image</label> &nbsp;
            <input
                type="file"
                name="filename"
                accept="image/png, image/jpeg"
                onChange={e =>setImageHandler(e.target.files[0])}
            />
            <br></br>
            <br></br>
            <label>Content</label> &nbsp;
            <textarea name='Enter Text Here...' rows='10' cols='50' onChange={e => setContentHandler(e.target.value)}></textarea>
            <br></br>
            <br></br>
            <Button name="Submit" clicked={() => savePostHandler(userId, title, image, content)}/>
        </div>
    );
}

export default AddPost;