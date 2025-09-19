import { put, takeEvery, delay } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
	incrementAsync,
	incrementAsyncSuccess,
	incrementAsyncFailure,
} from "../ducks/counter";

// Worker saga: will be fired on INCREMENT_ASYNC actions
function* incrementAsyncSaga(action: PayloadAction<number>) {
	try {
		// Simulate an API call with delay
		yield delay(1000);

		// Simulate potential failure (10% chance)
		const shouldFail = Math.random() < 0.1;
		if (shouldFail) {
			throw new Error("Something went wrong!");
		}

		// Dispatch success action
		yield put(incrementAsyncSuccess(action.payload));
	} catch (error) {
		// Dispatch failure action
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error";
		yield put(incrementAsyncFailure(errorMessage));
	}
}

// Watcher saga: watches for INCREMENT_ASYNC actions
function* watchIncrementAsync() {
	yield takeEvery(incrementAsync.type, incrementAsyncSaga);
}

// Export the main saga
export { watchIncrementAsync as counterSaga };
