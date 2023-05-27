import React from "react";
import ReactDOM from "react-dom/client";
import { attachLogger } from "effector-logger";
import "./index.scss";
import App from ".";

const container = document.querySelector("#root") as HTMLElement;

const root = ReactDOM.createRoot(container);

attachLogger();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
