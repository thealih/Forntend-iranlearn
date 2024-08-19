import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./Styles/reset.css";
import "./Styles/fonts.css";
import "./Styles/variables.css";
import "./Styles/defaults.css";
import "./Styles/helpers.css";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
