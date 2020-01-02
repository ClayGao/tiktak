import { GET_TODOLIST_DATA, GET_TODOLIST_DATA_SUCCESS, POST_TODOLIST_DATA, POST_TODOLIST_DATA_SUCCESS} from '../actions/actionTypes'

const initState = {
    isLoading: false,
    todolistData : [],
}

export const getTodolistDataReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_TODOLIST_DATA:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOLIST_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todolistData: action.data,
            }
        case POST_TODOLIST_DATA:
            return {
                ...state,
                isLoading: true
            }
        case POST_TODOLIST_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

