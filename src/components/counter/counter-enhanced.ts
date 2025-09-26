import { connect } from "react-redux";
import { flow } from "lodash";
import { Counter } from "./counter";
import { createMapStateToProps, createMapDispatchToProps } from "../../logic";
import {
	selectCounterLoading,
	selectCounterValue,
	selectCounterError,
	increment,
	decrement,
	setNewCounterValue,
} from "../../logic/ducks/counter";

const mapStateToProps = createMapStateToProps((state) => ({
	loading: selectCounterLoading(state),
	count: selectCounterValue(state),
	error: selectCounterError(state),
}));

const mapDispatchToProps = createMapDispatchToProps((dispatch) => ({
	increment: () => dispatch(increment()),
	decrement: () => dispatch(decrement()),
	setValue: (amount: number) => dispatch(setNewCounterValue(amount)),
}));

export const CounterEnhanced = flow(
	connect(mapStateToProps, mapDispatchToProps)
)(Counter) as typeof Counter;
