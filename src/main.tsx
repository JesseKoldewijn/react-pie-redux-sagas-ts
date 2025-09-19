import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReduxProvider } from "./logic";
import { App } from "./app";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ReduxProvider>
			<App />
		</ReduxProvider>
	</StrictMode>
);
