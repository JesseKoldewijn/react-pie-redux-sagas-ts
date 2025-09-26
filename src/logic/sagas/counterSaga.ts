import { put, takeEvery } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
	setNewCounterValue,
	setNewCounterValueSuccess,
	setNewCounterValueFailure,
} from "../ducks/counter";

// Worker saga: will be fired on INCREMENT_ASYNC actions
function* quantityIncrementHandler(action: PayloadAction<number>) {
	try {
		// Dispatch success action
		yield put(setNewCounterValueSuccess(action.payload));
	} catch (error) {
		// Dispatch failure action
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error";
		yield put(setNewCounterValueFailure(errorMessage));
	}
}

// Watcher saga: watches for SET_NEW_COUNTER_VALUE actions
function* watchNewCounterValue() {
	yield takeEvery(setNewCounterValue.type, quantityIncrementHandler);
}

// Export the main saga
export { watchNewCounterValue as counterSaga };
