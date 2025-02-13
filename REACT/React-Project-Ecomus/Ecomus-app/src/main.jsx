import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import CreateContextProduct from './context/createContextProduct'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreateContextProduct>
      <App />
    </CreateContextProduct>
  </StrictMode>
);
