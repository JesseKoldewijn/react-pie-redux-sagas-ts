// Main exports from the logic layer
export { ReduxProvider } from "./ReduxProvider";
export { useAppDispatch, useAppSelector } from "./hooks";
export { store } from "./store";
export type { RootState, AppDispatch } from "./store";

// Duck exports
export * from "./ducks/counter";

// Model exports
export * from "./models/common";
