import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/inter";
import "@fontsource/inter/300.css";
import { setupMsw } from "./mocks/setup";
import { env } from "./utils/env-variable";

if (env.enableMock) {
  setupMsw();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
