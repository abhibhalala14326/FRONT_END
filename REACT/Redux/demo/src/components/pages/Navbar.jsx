import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShopify,
  FaProductHunt,
  FaSignInAlt,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { useSelector } from "react-redux";

export default function ButtonAppBar() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="flex justify-between space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-white">
                 <span>Home</span>
              </Link>
              <Link
                to="/shop"
                className="flex items-center space-x-2 text-white"
              >
                 <span>Shop</span>
              </Link>
              <Link
                to="/product"
                className="flex items-center space-x-2 text-white"
              >
                 <span>Product</span>
              </Link>
              <Link
                to="/login"
                className="flex items-center space-x-2 text-white"
              >
                 <span>Login</span>
              </Link>
              <Link
                to="/wishlist"
                className="flex items-center space-x-2 text-white"
              >
                <FaHeart /> <span>Wishlist</span>
              </Link>
              <Link
                to="/cart"
                className="relative flex items-center space-x-2 text-white"
              >
                <FaShoppingCart />
                <span>Cart</span>
               
                  <span className="absolute -top-2  bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                   
                  </span>
            
              </Link>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
