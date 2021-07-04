import * as actionTypes from './actionTypes';
import axios from '../../spoonacular-data-axios';

const API_KEY = '1909925d99744142822955c48c2f36a8';

export const fetchViewedRecipeStart = () => {
    return {
        type: actionTypes.FETCH_VIEWED_RECIPE_START
    }
}

export const fetchViewedRecipeSuccess = (recipe) => {
    return {
        type: actionTypes.FETCH_VIEWED_RECIPE_SUCCESS,
        recipe: recipe
    }
}

export const fetchViewedRecipeFailed = () => {
    return {
        type: actionTypes.FETCH_VIEWED_RECIPE_FAILED
    }
}

export const getRecipe = (url) => {
    return dispatch => {

        dispatch(fetchViewedRecipeStart());
        axios.get('/recipes/extract?url=' + url + '&apiKey=' + API_KEY)
            .then(response => dispatch(fetchViewedRecipeSuccess(response.data)))
            .catch(err => dispatch(fetchViewedRecipeFailed()))

    }
}