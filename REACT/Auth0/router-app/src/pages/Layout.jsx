import React from 'react'
import Home from './Home';
import AboutUs from './AboutUs';
import Login from './Login';
import Navbar from '../components/Navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
    
const Layout = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout
