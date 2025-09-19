import {
	useAppSelector,
	useAppDispatch,
	increment,
	decrement,
	incrementByAmount,
	incrementAsync,
	reset,
	selectCounterValue,
	selectCounterLoading,
	selectCounterError,
} from "./logic";

import "./styles/global.scss";
import "./styles/jet.scss";

import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";

function App() {
	const dispatch = useAppDispatch();
	const count = useAppSelector(selectCounterValue);
	const loading = useAppSelector(selectCounterLoading);
	const error = useAppSelector(selectCounterError);

	return (
		<main style={{ padding: "2rem" }}>
			<div style={{ marginBottom: "1rem" }}>
				<h2>Counter: {count}</h2>
				{loading && <p>Loading...</p>}
				{error && <p style={{ color: "red" }}>Error: {error}</p>}
			</div>

			<div
				style={{
					display: "flex",
					gap: "1rem",
					flexWrap: "wrap",
					padding: "1rem",
					backgroundColor: "var(--dt-color-cupcake-10)",
					borderRadius: "8px",
					boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
					border: "1px solid var(--dt-color-charcoal-30)",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<div
					style={{
						display: "flex",
						gap: "0.5rem",
						flexWrap: "wrap",
					}}
				>
					<PieButton
						size="small-expressive"
						onClick={() => dispatch(increment())}
					>
						+1
					</PieButton>
					<PieButton
						size="small-expressive"
						onClick={() => dispatch(decrement())}
					>
						-1
					</PieButton>
					<PieButton
						size="small-expressive"
						onClick={() => dispatch(incrementByAmount(5))}
					>
						+5
					</PieButton>
					<PieButton
						size="small-expressive"
						onClick={() => dispatch(incrementAsync(3))}
					>
						+3 (Async)
					</PieButton>
					<PieButton
						size="small-expressive"
						onClick={() => dispatch(reset())}
					>
						Reset
					</PieButton>
				</div>

				<p
					style={{
						marginTop: "1rem",
						fontSize: "0.9rem",
						color: "#666",
					}}
				>
					This demonstrates Redux with Redux-Saga. The async button
					simulates an API call with potential failure.
				</p>
			</div>
		</main>
	);
}

export default App;
