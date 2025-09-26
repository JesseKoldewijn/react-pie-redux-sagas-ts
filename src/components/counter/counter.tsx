import { useMemo } from "react";
import styles from "./counter.module.css";

export interface CounterProps {
	label?: string;
	loading?: boolean;
	increment?: () => void;
	decrement?: () => void;
	setValue?: (amount: number) => void;
	count?: number;
	error?: string | null;
}

export const Counter = (props: CounterProps) => {
	const {
		label = "Quantity",
		loading,
		increment = () => {},
		decrement = () => {},
		setValue = () => {},
		count = 0,
		error,
	} = props;

	const inputIdentifier = useMemo(() => {
		const uniqueId = Math.random().toString(36).substring(2, 25);
		return `counter-${uniqueId}`;
	}, []);

	return (
		<div className={styles.container}>
			<label
				htmlFor={`input-${inputIdentifier}`}
				className={styles.quantityLabel}
			>
				{label}
			</label>
			<div className={styles.quantitySelector}>
				<button
					className={styles.quantityButton}
					onClick={() => decrement()}
					disabled={loading}
					aria-label="Decrease quantity"
				>
					-
				</button>
				<input
					id={`input-${inputIdentifier}`}
					type="number"
					className={styles.quantityInput}
					value={count}
					onChange={(e) => {
						const value = Number(e.target.value);
						if (!isNaN(value) && value >= 0) {
							const formattedValue =
								Math.floor(value).toPrecision();
							const valueString = e.target.value;
							if (
								formattedValue !== "0" &&
								valueString.startsWith("0")
							) {
								const trimmedValue = valueString.slice(
									1,
									valueString.length
								);
								setValue(Number(trimmedValue));
								e.target.value = trimmedValue;
								return;
							}
							setValue(Number(formattedValue));
						}
					}}
				/>
				<button
					className={styles.quantityButton}
					onClick={() => increment()}
					disabled={loading}
					aria-label="Increase quantity"
				>
					+
				</button>
			</div>

			<div className={styles.messageContainer}>
				{loading && (
					<span className={styles.loadingText}>Loading...</span>
				)}
				{error && (
					<span className={styles.errorText}>Error: {error}</span>
				)}
			</div>
		</div>
	);
};
