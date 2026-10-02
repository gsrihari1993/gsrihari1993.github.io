import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/site.css";

// The page is pre-rendered at build time, so React attaches to existing markup.
hydrateRoot(document.getElementById("root"), <App />);
