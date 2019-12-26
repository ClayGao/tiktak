import { combineReducers } from 'redux'
import { getWeatherDataReducer } from './getWeatherDataReducer'
import { getTodolistDataReducer } from './getTodolistReducer'

export const Reducers = combineReducers({
    getWeatherDataReducer,
    getTodolistDataReducer
})



