import * as actionTypes from '../actions/actionTypes';
import { firestore, storage } from '../../firebase';

export const setUserData = (data) => {
    return {
        type: actionTypes.SET_USER_DATA,
        data: data
    }
}

export const setUserPhoto = (data) => {
    return {
        type: actionTypes.SET_USER_PHOTO,
        data: data
    }
}

export const setUserDiet = (data) => {
    return {
        type: actionTypes.SET_USER_DIET,
        data: data
    }
}

export const getUserData = (userId) => {
    return dispatch => {

        firestore.collection('users').where('userId', '==', userId).get()
            .then(res => {
                let udata;
                res.forEach(doc => {
                    udata = doc.data();
                })
                dispatch(setUserData(udata))
                console.log('success user');
            })
    }
}

export const getUserDiet = (userId) => {
    return dispatch => {

        firestore.collection('meals')
        .where('userId', '==', userId)
        .get()
        .then(res => {
            let dietList = []
            res.forEach(doc => {
                dietList.push(doc)
            })
            dispatch(setUserDiet(dietList))
            console.log('success diet');
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
                        firestore.collection('users').where('userId', '==', userId)
                        .get()
                        .then(res => {
                            res.forEach( doc => {
                                doc.ref.update({
                                    profilePic: url
                                }).then(res => {
                                    dispatch(setUserPhoto(url))
                                    console.log('success photo');
                                })
                            })
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            });
    }
}