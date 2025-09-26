import { Counter } from "./components/counter";
import "./styles/global.css";
import "./styles/jet.css";

export const App = () => {
	return (
		<div style={{ padding: 20 }}>
			<h1>React, Redux (Saga) and Pie Design</h1>
			<Counter />
		</div>
	);
};
