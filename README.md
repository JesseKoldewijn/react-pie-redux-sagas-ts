# Redux + Redux-Saga Setup

This project demonstrates a minimal setup for Redux with Redux-Saga, organized using the "ducks" pattern where all related logic lives together.

## Project Structure

```
src/
├── logic/                    # All Redux/Saga logic
│   ├── ducks/               # Duck pattern: actions, reducers, selectors
│   │   └── counter.ts       # Example counter duck
│   ├── sagas/               # Saga watchers and workers
│   │   └── counterSaga.ts   # Example counter saga
│   ├── models/              # TypeScript interfaces and types
│   │   └── common.ts        # Common type definitions
│   ├── ReduxProvider.tsx    # Redux Provider component
│   ├── hooks.ts             # Typed Redux hooks
│   ├── rootReducer.ts       # Combined reducers
│   ├── rootSaga.ts          # Combined sagas
│   ├── store.ts             # Store configuration
│   └── index.ts             # Barrel exports
├── App.tsx                  # Main app component
└── main.tsx                 # App entry point with provider
```

## Key Features

### 1. Duck Pattern

Each "duck" file contains related:

-   Action creators
-   Reducer logic
-   Selectors
-   TypeScript types

### 2. Redux-Saga Integration

-   Sagas handle async operations
-   Separate watchers and workers
-   Error handling patterns

### 3. TypeScript Support

-   Fully typed Redux hooks
-   Proper action payload types
-   Inferred state types

### 4. Provider Setup

The app is wrapped with a Redux provider in `main.tsx`:

```tsx
<ReduxProvider>
	<App />
</ReduxProvider>
```

## Usage

### 1. Using Redux in Components

```tsx
import {
	useAppSelector,
	useAppDispatch,
	increment,
	selectCounterValue,
} from "./logic";

function MyComponent() {
	const dispatch = useAppDispatch();
	const count = useAppSelector(selectCounterValue);

	return (
		<button onClick={() => dispatch(increment())}>Count: {count}</button>
	);
}
```

### 2. Adding New Ducks

1. Create a new duck file in `src/logic/ducks/`
2. Export actions, reducer, and selectors
3. Add reducer to `rootReducer.ts`
4. Export from `logic/index.ts`

### 3. Adding New Sagas

1. Create saga file in `src/logic/sagas/`
2. Export watcher saga
3. Add to `rootSaga.ts`

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## Dependencies

-   **@reduxjs/toolkit**: Modern Redux with less boilerplate
-   **react-redux**: React bindings for Redux
-   **redux-saga**: Side effect management for Redux
-   **redux**: Core Redux library

The setup uses Redux Toolkit's `configureStore` and `createSlice` for a modern, maintainable Redux experience while integrating seamlessly with Redux-Saga for complex async flows.

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			// Other configs...

			// Remove tseslint.configs.recommended and replace with this
			tseslint.configs.recommendedTypeChecked,
			// Alternatively, use this for stricter rules
			tseslint.configs.strictTypeChecked,
			// Optionally, add this for stylistic rules
			tseslint.configs.stylisticTypeChecked,

			// Other configs...
		],
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			// Other configs...
			// Enable lint rules for React
			reactX.configs["recommended-typescript"],
			// Enable lint rules for React DOM
			reactDom.configs.recommended,
		],
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```
