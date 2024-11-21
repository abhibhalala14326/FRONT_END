import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Redux Provider
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/Store.js"; // Import the Redux store

console.log(store); // Debugging: log the store

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
     
      <App />
    </Provider>
  </StrictMode>
);
