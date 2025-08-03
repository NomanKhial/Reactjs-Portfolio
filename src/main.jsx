import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import AppContextProvider from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvider>
);
