import {put, call, fork, take, takeLatest} from 'redux-saga/effects'
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

// 當 watcher 的 POST_TODOLIST_DATA 觸發時，
// 後續要執行的函式會自動帶上 action 參數
export function* postTodolistSaga(action) {
    yield call(WebAPI.postTodolistDataAPI, action.data)
    yield put(todolistActions.postTodolistDataDone())  
    // 再次觸發 watcher 使其重新發 ajax
    yield put(todolistActions.getTodolistData()) 
}

export function* deleteTodolistSaga(action) {
    console.log(action.data)
    yield call(WebAPI.deleteTodolistDataAPI, action.data)
    // 再次觸發 watcher 使其重新發 ajax
    yield put(todolistActions.getTodolistData())
}
