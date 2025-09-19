import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		reset: (state) => {
			state.value = 0;
			state.error = null;
		},

		// Saga-related actions
		incrementAsync: {
			reducer: (state) => {
				state.loading = true;
				state.error = null;
			},
			prepare: (amount: number) => ({ payload: amount }),
		},
		incrementAsyncSuccess: (state, action: PayloadAction<number>) => {
			state.loading = false;
			state.value += action.payload;
		},
		incrementAsyncFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

// Action creators
export const {
	increment,
	decrement,
	incrementByAmount,
	reset,
	incrementAsync,
	incrementAsyncSuccess,
	incrementAsyncFailure,
} = counterSlice.actions;

// Selectors
export const selectCounter = (state: { counter: CounterState }) =>
	state.counter;
export const selectCounterValue = (state: { counter: CounterState }) =>
	state.counter.value;
export const selectCounterLoading = (state: { counter: CounterState }) =>
	state.counter.loading;
export const selectCounterError = (state: { counter: CounterState }) =>
	state.counter.error;

// Reducer (default export)
export default counterSlice.reducer;
