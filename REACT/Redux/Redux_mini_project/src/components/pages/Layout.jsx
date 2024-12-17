import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop.jsx";
import Home from "./Home.jsx";
import Cart from "./Cart.jsx";
import Wishlist from "./Wishlist.jsx";
import Login from "./Login.jsx";
import Product from "./Product.jsx";
import Err from "./Err.jsx";
import Navbar from './Navbar.jsx'

import React from "react";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/wishlist" element={<Wishlist></Wishlist>} />
        <Route path="*" element={<Err></Err>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
