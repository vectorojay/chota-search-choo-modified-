import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import ResultContextProvider from "./components/ResultContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ResultContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ResultContextProvider>
);
