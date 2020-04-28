import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initialState = {
    results: []
}

const deleteResult = (state, id) => {
    const updateArray = state.results.filter((result) => result.id !== id)
    return updateObject(state, { results: updateArray })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.counter }) })
        case 'DELETE_RESULT':
            return deleteResult(state, action.resultElId)
        default:
            return state;
    }
}

export default reducer;