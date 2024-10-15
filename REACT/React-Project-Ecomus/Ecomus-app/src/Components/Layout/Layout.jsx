import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import  Home from '../Layout/Pages/Home'
import  Blog from '../Layout/Pages/Blog'
import Page from "../Layout/Pages/Page";
import Produtcs from "../Layout/Pages/Produtcs";
import Shop from "../Layout/Pages/Shop";
import Navbar from "../Helping-Components/Navbar";

const Layout = () => {
  const List = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
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
      ],
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
