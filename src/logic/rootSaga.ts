import { all, fork } from "redux-saga/effects";
import { counterSaga } from "./sagas/counterSaga";

export function* rootSaga() {
	yield all([fork(counterSaga)]);
}
