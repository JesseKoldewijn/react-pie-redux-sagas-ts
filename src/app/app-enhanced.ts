import { connect } from "react-redux";
import { flow } from "lodash";
import App from "./app";
import {
	createMapDispatchToProps,
	createMapStateToProps,
	decrement,
	increment,
	incrementAsync,
	incrementByAmount,
	reset,
	selectCounterError,
	selectCounterLoading,
	selectCounterValue,
} from "../logic";

const mapStateToProps = createMapStateToProps((state) => ({
	loading: selectCounterLoading(state),
	count: selectCounterValue(state),
	error: selectCounterError(state),
}));

const mapDispatchToProps = createMapDispatchToProps((dispatch) => ({
	increment: () => dispatch(increment()),
	decrement: () => dispatch(decrement()),
	incrementByAmount: (amount: number) => dispatch(incrementByAmount(amount)),
	incrementAsync: (amount: number) => dispatch(incrementAsync(amount)),
	reset: () => dispatch(reset()),
}));

export const AppEnhanced = flow(connect(mapStateToProps, mapDispatchToProps))(
	App
) as typeof App;
