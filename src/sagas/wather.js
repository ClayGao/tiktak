import {takeEvery} from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import { 
    weatherSaga,
    getTodolistSaga,
    postTodolistSaga,
    deleteTodolistSaga,
    patchTodolistSaga
} from './saga'

export function* watchWeatherSaga() {
    yield takeEvery(actionTypes.GET_WEATHER_DATA, weatherSaga)
}

export function* watchGetTodolistSaga() {
    yield takeEvery(actionTypes.GET_TODOLIST_DATA, getTodolistSaga)
}

export function* watchPostTodolistSaga() {
    yield takeEvery(actionTypes.POST_TODOLIST_DATA, postTodolistSaga)
}

export function* watchDeleteTodolistSaga() {
    yield takeEvery(actionTypes.DELETE_TODOLIST_DATA, deleteTodolistSaga)
}

export function* watchPatchTodolistSaga() {
    yield takeEvery(actionTypes.PATCH_TODOLIST_DATA, patchTodolistSaga)
}
