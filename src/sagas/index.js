import { all } from 'redux-saga/effects';
import  { 
  watchWeatherSaga,
  watchGetTodolistSaga,
  watchPostTodolistSaga,
  watchDeleteTodolistSaga
} from './wather'

function* rootSaga() {
  yield all([
    watchWeatherSaga(),
    watchGetTodolistSaga(),
    watchPostTodolistSaga(),
    watchDeleteTodolistSaga()
  ]);
}

export default rootSaga;