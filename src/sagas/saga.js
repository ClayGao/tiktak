import {put, call, fork, take} from 'redux-saga/effects'
import * as WebAPI from '../WebAPI'
import * as weatherActions from '../actions/weather'
import * as todolistActions from '../actions/todolist'


export function* weatherSaga() {
    const weatherData = yield call(
        () => WebAPI.getWeatherDataAPI()
    )
    yield put(weatherActions.getWeatherDataDone(weatherData))
}

export function* getTodolistSaga() {
    const todolistData = yield call(WebAPI.getTodolistDataAPI)
    yield put(todolistActions.getTodolistDataDone(todolistData)) 
    // 這邊是寫成 action creater 的回傳，也可直接寫 action 物件 { }
}


export function* postTodolistSaga() {
    const actionPost = yield take('POST_TODOLIST_DATA')
    console.log('0')
    // 獲取 action 內中的 data
    //const actionPost = yield take('POST_TODOLIST_DATA')
    //console.log(actionPost)
    //yield fork(WebAPI.postTodolistDataAPI, actionPost.data)
    console.log('2')
    yield put(todolistActions.postTodolistDataDone())
    alert('3')
    
}
