import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./LandingPage";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
  );
}

