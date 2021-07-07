import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userData: '',
    userDiet:''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_DATA:
            return {
                ...state,
                userData: action.data
            }
        case actionTypes.SET_USER_PHOTO:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    profilePic: action.data
                }
            }
        case actionTypes.SET_USER_DIET:
            return {
                ...state,
                userDiet: action.data
            }
        default: return state;
    }
}
export default reducer;