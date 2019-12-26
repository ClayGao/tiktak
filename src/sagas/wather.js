import {takeEvery} from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import { 
    weatherSaga,
    todolistSaga
} from './saga'

export function* watchWeatherSaga() {
    yield takeEvery(actionTypes.GET_WEATHER_DATA, weatherSaga)
}

export function* watchTodolistSaga() {
    yield takeEvery(actionTypes.GET_TODOLIST_DATA, todolistSaga)
}


