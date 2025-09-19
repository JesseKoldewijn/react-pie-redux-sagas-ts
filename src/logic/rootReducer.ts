import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./ducks/counter";

// Combine all reducers
export const rootReducer = combineReducers({
	counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
