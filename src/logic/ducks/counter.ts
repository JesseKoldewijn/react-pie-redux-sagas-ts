import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Models/Types
export interface CounterState {
	value: number;
	loading: boolean;
	error: string | null;
}

// Initial State
const initialState: CounterState = {
	value: 0,
	loading: false,
	error: null,
};

// Slice (Duck pattern)
const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		// Synchronous actions
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		reset: (state) => {
			state.value = 0;
			state.error = null;
		},

		// Saga-related actions
		setNewCounterValue: {
			reducer: (state) => {
				state.loading = true;
				state.error = null;
			},
			prepare: (amount: number) => ({ payload: amount }),
		},
		setNewCounterValueSuccess: (state, action: PayloadAction<number>) => {
			state.loading = false;
			state.value = action.payload;
		},
		setNewCounterValueFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

// Action creators
export const {
	increment,
	decrement,
	reset,
	setNewCounterValue,
	setNewCounterValueSuccess,
	setNewCounterValueFailure,
} = counterSlice.actions;

// Selectors
const rootSelector = (state: RootState) => state.counter;
export const selectCounter = createSelector(rootSelector, (counter) => counter);
export const selectCounterValue = createSelector(
	rootSelector,
	(counter) => counter.value
);
export const selectCounterLoading = createSelector(
	rootSelector,
	(counter) => counter.loading
);
export const selectCounterError = createSelector(
	rootSelector,
	(counter) => counter.error
);

// Reducer (default export)
export default counterSlice.reducer;
