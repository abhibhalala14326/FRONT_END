import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Demo from './try.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    <Demo/>

  </StrictMode>,
)
