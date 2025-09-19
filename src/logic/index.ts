import type { AppDispatch, RootState } from "./store";

// Main exports from the logic layer
export { ReduxProvider } from "./ReduxProvider";
export { useAppDispatch, useAppSelector } from "./hooks";
export { store } from "./store";
export type { RootState, AppDispatch } from "./store";

// Duck exports
export * from "./ducks/counter";

// Model exports
export * from "./models/common";

export const createMapStateToProps = <GenericStateMapping>(
	callback: (state: RootState) => GenericStateMapping
) => {
	return (state: RootState) => {
		return callback(state);
	};
};

export const createMapDispatchToProps = <GenericDispatchMapping>(
	callback: (dispatch: AppDispatch) => GenericDispatchMapping
) => {
	return (dispatch: AppDispatch) => {
		return callback(dispatch);
	};
};
