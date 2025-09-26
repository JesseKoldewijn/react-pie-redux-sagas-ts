import type { AppDispatch, RootState } from "./store";

// Main exports from the logic layer
export { ReduxProvider } from "./ReduxProvider";
export { useAppDispatch, useAppSelector } from "./hooks";
export { store } from "./store";
export type { RootState, AppDispatch } from "./store";

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
