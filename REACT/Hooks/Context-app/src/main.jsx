import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Con_4 from "./Contact/Con_4.jsx";
import Index from "./Theme-project/index.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App> */}
      {/* <Con_4 /> */}
      <Index/>
    {/* </App> */}
  </StrictMode>
);
