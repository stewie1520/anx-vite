import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../api/fetchUsers';
import { userFetchingStarted, userFetchingSuccessed } from './slice';

function* handleFetchUsers(action) {
  const response = yield call(Api.fetchUsers, action.payload);
  yield put(userFetchingSuccessed(response));
}

function* onFetchUsers() {
  yield takeEvery(userFetchingStarted, handleFetchUsers);
}

export function* saga() {
  yield all([
    onFetchUsers(),
  ]);
}
