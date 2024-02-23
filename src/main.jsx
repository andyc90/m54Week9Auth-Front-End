// Import necessary React modules
import React from "react";
import ReactDOM from "react-dom/client";

// Import the main App component
import App from "./App.jsx";

// Import global styles
import "./index.css";

// Import BrowserRouter for routing
import { BrowserRouter } from "react-router-dom";

// Render the App component within a StrictMode and BrowserRouter
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
