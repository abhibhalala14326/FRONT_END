import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-6mguzzzew2witpb5.us.auth0.com"
    clientId="Us0icaHh5gA2VhCuCu3Ecdc0vPWXLm6y"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
);
