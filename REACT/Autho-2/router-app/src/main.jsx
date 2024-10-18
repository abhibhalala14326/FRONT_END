import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-rd3jsj2wzqh7tqcd.us.auth0.com"
      clientId="pBulRTaY468Q23ApJebfBbaieqBQsGTw"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
