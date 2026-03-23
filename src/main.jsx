import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import LandingPage from "./LandingPage";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <LandingPage />
      <Analytics />
    </React.StrictMode>
  );
}

