import { all } from 'redux-saga/effects';
import  { 
  watchWeatherSaga,
  watchTodolistSaga
} from './wather'

function* rootSaga() {
  yield all([
    watchWeatherSaga(),
    watchTodolistSaga()
  ]);
}

export default rootSaga;