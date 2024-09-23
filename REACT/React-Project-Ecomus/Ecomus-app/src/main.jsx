import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home/Home.jsx'
import './index.css'
import Shop from './Components/Shop/Shop.jsx' 
import Login from './Components/Home/Login.jsx'
import Produtcs from './Components/Produtcts/Produtcs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home /> */}
    <Shop/>
    {/* <Login/> */}
    {/* <Produtcs/> */}
  </StrictMode>,
)
