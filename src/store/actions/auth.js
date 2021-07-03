import * as actionTypes from './actionTypes';
import { auth, firestore } from '../../firebase';

export const setIsSignup = () => {
    return {
        type: actionTypes.SET_IS_SIGN_UP
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS
    }
}

export const loginSuccess = (userId) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userId: userId
    }
}

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    }
}

export const signUp = (name, email, password) => {
    return dispatch => {

        dispatch(authStart());
        auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
                const { uid, email } = response.user;
                firestore.collection('users').add({
                    userId: uid,
                    name: name,
                    email: email,
                    profilePic: 'https://res.cloudinary.com/disha644/image/upload/v1625313063/food-o-mania/profilePic_e71cbz.png'
                })
                    .then((res) => {
                        dispatch(authSuccess());
                        dispatch(setIsSignup());
                    })
            })
            .catch(err => {
                dispatch(authFailed(err.message));
            })
    }
}

export const SignIn = (email, password) => {
    return dispatch => {

        dispatch(authStart());
        auth.signInWithEmailAndPassword(email, password)
            .then((res) => dispatch(loginSuccess(res.user.uid)))
            .catch(err => dispatch(authFailed(err.message)))
    }
}

const logoutUser = () => {
    return {
        type: actionTypes.LOGOUT_USER
    }
}

export const logout = () => {
    return dispatch => {

        auth.signOut()
            .then(res => dispatch(logoutUser()))

    }
}