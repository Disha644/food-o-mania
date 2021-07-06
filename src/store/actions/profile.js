import * as actionTypes from '../actions/actionTypes';
import { firestore, storage } from '../../firebase';

export const setUserData = (data) => {
    return {
        type: actionTypes.SET_USER_DATA,
        data: data
    }
}

export const getUserData = (userId) => {
    return dispatch => {

        firestore.collection('users').where('userId', '==', userId).get()
            .then(res => {
                let udata;
                res.forEach(doc => {
                    console.log(doc.id, doc.data().name);
                    udata = doc.data();
                })
                dispatch(setUserData(udata))
            })
    }
}

export const updateImage = (image, userId) => {
    return dispatch => {

        const uploadTask = storage.ref('images/' + image.name).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => { }, (error) => {
                alert('Image upload failed');
            }, () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        firestore.collection('users').where('userId', '==', userId).put({
                            profilePic: url
                        }).then(res => console.log(res))
                    })
            });
    }
}