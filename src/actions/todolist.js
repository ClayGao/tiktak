import * as actionTypes from './actionTypes'

export const getTodolistData = () => {
    return {
        type: actionTypes.GET_TODOLIST_DATA
    }
}

export const getTodolistDataDone = (data) => {
    return {
        type: actionTypes.GET_TODOLIST_DATA_SUCCESS,
        data
    }
}