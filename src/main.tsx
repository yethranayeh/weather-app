/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoreProvider } from "easy-peasy";
import { store } from "./store";
import "./styles/main.css";
import "./styles/reset.css";

// Temporary fix for Easy Peasy Provider returning type error with React 18.0.0
const StoreProviderOverride = StoreProvider as any;

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
	<StoreProviderOverride store={store}>
		<App />
	</StoreProviderOverride>
	// </React.StrictMode>
);
