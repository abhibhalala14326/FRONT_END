import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { ThemsStore } from './redux/store/ThemsStore.js'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={ThemsStore}>
      <App />
    </Provider>
  </StrictMode>
);
