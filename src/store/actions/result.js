import * as typeActions from './actionTypes';

export const saveResult = (counter) => {
    return {
        type: typeActions.STORE_RESULT,
        counter: counter
    }
}

export const storeResult = (counter) => {
    return dispatch => {
        //setTimeout(() => {
            dispatch(saveResult(counter))
        //},2000)
    }
}
export const deleteResult = (id) => {
    return {
        type: typeActions.DELETE_RESULT,
        resultElId: id
    }
}