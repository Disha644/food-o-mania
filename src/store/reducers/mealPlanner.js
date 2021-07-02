import * as actionTypes from '../actions/actionTypes';

const initialState = {
    meals: [],
    nutrients: '',
    loading: false,
    calories: 0,
    dietType: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SET_CALORIES:
            return {
                ...state,
                calories: action.calories
            }
        case actionTypes.SET_DIET_TYPE:
            return {
                ...state,
                dietType: action.dietType
            }
        case actionTypes.FETCH_DIET_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_DIET_SUCCESS:
            return {
                ...state,
                loading: false,
                meals: action.meals,
                nutrients: action.nutrients
            }
        case actionTypes.FETCH_RECIPES_FAILED:
            return {
                ...state,
                loading: false
            }
        default: return state;
    }
}

export default reducer;
