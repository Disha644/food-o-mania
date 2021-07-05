import * as actionTypes from '../actions/actionTypes';
// import axios from '../../spoonacular-data-axios';
import { firestore } from '../../firebase';

// const API_KEY = '8e78a57c40e2df15ac802070a3ad672884013ff2';

export const setUserData = (data) => {
    return {
        type: actionTypes.SET_USER_DATA,
        data: data
    }
}

export const getUserData = (userId) => {
    return dispatch => {
        firestore.collection('users').where('userId','==',userId).get()
        .then(res => {
            let udata;
            res.forEach(doc =>{
                console.log(doc.id, doc.data().name);
                udata = doc.data();
            })
            dispatch(setUserData(udata))
        })
    }
}