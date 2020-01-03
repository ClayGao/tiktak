import { all } from 'redux-saga/effects';
import  { 
  watchWeatherSaga,
  watchGetTodolistSaga,
  watchPostTodolistSaga,
  watchDeleteTodolistSaga,
  watchPatchTodolistSaga
} from './wather'

function* rootSaga() {
  yield all([
    watchWeatherSaga(),
    watchGetTodolistSaga(),
    watchPostTodolistSaga(),
    watchDeleteTodolistSaga(),
    watchPatchTodolistSaga()
  ]);
}

export default rootSaga;