import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import * as ACTIONS from "../actions";
import { getUsersApi } from "../api-utils/api";



export function* fetchUsers() {
    try {
        const result = yield call(getUsersApi);
        yield put(ACTIONS.getUsers(result)); 
    } catch(error) {
        console.log("Arash Error:",error);
    }
    
}

export function* watchFetchRequest() {
    yield takeEvery(ACTIONS.Types.GET_USERS_LISEN, fetchUsers);
}

export const usersSaga = [fork(watchFetchRequest)];

export default function* rootSagas() {
    yield all([...usersSaga]);
}

// export default function* rootSagas() {
//     yield all([watchFetchRequest]);
// }