import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import  Home from '../Layout/Pages/Home'
import  Blog from '../Layout/Pages/Blog'
import Page from "../Layout/Pages/Page";
import Produtcs from "../Layout/Pages/Produtcs";
import Shop from "../Layout/Pages/Shop";
import Navbar from "../Helping-Components/Navbar";
import ContactUs from "./Pages/ContactUs";
import Faq from "./Pages/Faq";
import ViewCart from "./Pages/ViewCart";
import Checkout from "./Pages/Checkout";
import Errorspages from "./Pages/Errorspages";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import SignUp from "./Signup";

const Layout = () => {
  const List = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
    },
    {
      path: "/viewcart",
      element: <ViewCart />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },

    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/page",
          element: <Page />,
        },
        {
          path: "/produtcs1",
          element: <Produtcs />,
        },
        {
          path: "/Shop",
          element: <Shop />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
      ],
    },
    {
      path: "*",
      element: <Errorspages />,
    },
  ]);
  return (
    <div>
      <div>
        <RouterProvider router={List} />
      </div>
    </div>
  );
};

export default Layout;
