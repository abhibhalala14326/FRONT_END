import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PackingList from './Components/Tack.jsx'
import Guest from './Components/Guest.jsx'
import { Coffee } from './Components/Guest.jsx'




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    <Guest />
    <Coffee />

    {/* <PackingList/> */}
    {/* <Item/> */}
  </StrictMode>
);
