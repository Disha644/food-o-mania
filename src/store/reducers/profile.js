import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userData: '',
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_DATA:
            return {
                ...state,
                userData: action.data
            }
        default: return state;
    }
}
export default reducer