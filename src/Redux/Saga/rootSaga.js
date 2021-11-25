import { LOAD_DATA_START, ADD_DATA_START, DELETE_DATA_START, UPDATE_DATA_START } from '../Action/type';
import {
  loadDataSucess,
  loadDataError,
  addDataSucess,
  addDataError,
  deleteDataSucess,
  deleteDataError,
  updateDataSucess,
  updateDataError
} from '../Action/action';
import {
  take,
  takeLatest,
  takeEvery,
  put,
  all,
  delay,
  fork,
  call
}
  from "redux-saga/effects";
import { getDataApi, addDataApi, deleteDataApi, updateDataApi } from "../../Services/ListService"

export function* onFetchdata() {
  try {
    // API Request
    const response = yield call(getDataApi);
    // yield delay(500);
    yield put(loadDataSucess(response.data));
  } catch (e) {
    yield put(loadDataError(e));
  }
}

export function* onPostdata(action) {
  try {
    const response = yield call(addDataApi, action.payload);
    yield put(addDataSucess(response.data));
  }
  catch (e) {
    yield put(addDataError(e));
  }
}

export function* onDeletedata(userId) {
  try {
    const response = yield call(deleteDataApi, userId);
    yield delay(500)
    yield put(deleteDataSucess(userId));
  }
  catch (e) {
    yield put(deleteDataError(e));
  }
}

export function* onPutdata(action) {
  let data = action.payload
  try {
    // API Request
    const response = yield call(updateDataApi, data.id, data.postData);
    yield delay(500)
    yield put(updateDataSucess(action.payload));
  }
  catch (e) {
    yield put(updateDataError(e));
  }
}


export function* onLoadData() {
  yield takeEvery(LOAD_DATA_START, onFetchdata);
}

export function* onCreateData() {
  yield takeLatest(ADD_DATA_START, onPostdata);
}

export function* onUpdateData() {
  yield takeLatest(UPDATE_DATA_START, onPutdata);
}

export function* onRemoveData() {
  while (true) {
    const { payload: userId } = yield take(DELETE_DATA_START);
    yield call(onDeletedata, userId)
  }
  // yield takeLatest(DELETE_DATA_START, onDeletedata);
}

const dataSagas = [fork(onLoadData), fork(onCreateData), fork(onRemoveData), fork(onUpdateData)];

export default function* rootSaga() {
  yield all([...dataSagas])
}