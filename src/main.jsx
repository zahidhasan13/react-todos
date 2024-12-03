import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TodoContext from "./context/TodoContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoContext>
      <App />
    </TodoContext>
  </StrictMode>
);
