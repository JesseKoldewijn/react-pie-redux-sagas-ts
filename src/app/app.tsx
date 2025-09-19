import "../styles/global.scss";
import "../styles/jet.scss";

import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";

export interface AppProps {
	loading?: boolean;
	increment?: () => void;
	decrement?: () => void;
	incrementByAmount?: (amount: number) => void;
	incrementAsync?: (amount: number) => void;
	reset?: () => void;
	count?: number;
	error?: string | null;
}

const App = (props: AppProps) => {
	const {
		loading,
		increment = () => {},
		decrement = () => {},
		incrementByAmount = () => {},
		incrementAsync = () => {},
		reset = () => {},
		count = 0,
		error,
	} = props;

	return (
		<main style={{ padding: "2rem" }}>
			<div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
				<strong>Counter:</strong> {count}
				{loading && <span>Loading...</span>}
				{error && <span style={{ color: "red" }}>Error: {error}</span>}
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
						onClick={() => increment()}
					>
						+1
					</PieButton>
					<PieButton
						size="small-expressive"
						onClick={() => decrement()}
					>
						-1
					</PieButton>
					<PieButton
						size="small-expressive"
						onClick={() => incrementByAmount(5)}
					>
						+5
					</PieButton>
					<PieButton
						size="small-expressive"
						onClick={() => incrementAsync(3)}
					>
						+3 (Async)
					</PieButton>
					<PieButton size="small-expressive" onClick={() => reset()}>
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
};

export default App;
