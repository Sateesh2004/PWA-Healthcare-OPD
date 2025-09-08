import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { registerSW } from "virtual:pwa-register";

// Register the PWA service worker
registerSW({
  onNeedRefresh() {
    console.log("New content available. Please refresh.");
    // Here you could show a toast or popup to let the user refresh
  },
  onOfflineReady() {
    console.log("App is ready to work offline.");
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
