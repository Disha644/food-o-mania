import * as actionTypes from './actionTypes';
import { firestore } from '../../firebase';

export const startFetch = () => {
    return {
        type: actionTypes.START_FETCHING
    }
}

export const setPosts = (posts) => {
    return {
        type: actionTypes.SET_POSTS,
        posts: posts
    }
}

export const setError = (error) => {
    return {
        type: actionTypes.SET_ERROR,
        error: error
    }
}

export const fetchPosts = () => {
    return dispatch => {

        dispatch(startFetch());
        firestore.collection('posts')
            .orderBy("timestamp", "desc")
            .get()
            .then(res => {
                let posts = [];
                res.forEach(doc => posts.push(doc));
                dispatch(setPosts(posts));
            })
            .catch(err => setError(err));
    }
}