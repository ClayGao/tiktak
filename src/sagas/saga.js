import {put, call} from 'redux-saga/effects'
import * as WebAPI from '../WebAPI'
import * as weatherActions from '../actions/weather'
import * as todolistActions from '../actions/todolist'

export function* weatherSaga() {
    const weatherData = yield call(
        () => WebAPI.getWeatherDataAPI()
    )
    yield put(weatherActions.getWeatherDataDone(weatherData))
}

export function* todolistSaga() {
    const todolistData = yield call(
        () => WebAPI.getTodolistDataAPI()
    )
    yield put(todolistActions.getTodolistDataDone(todolistData))
}