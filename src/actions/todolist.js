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

export const postTodolistData = (data) => {
    return {
        type: actionTypes.POST_TODOLIST_DATA,
        data
    }
}

export const postTodolistDataDone = () => {
    return {
        type: actionTypes.POST_TODOLIST_DATA_SUCCESS,
    }
}