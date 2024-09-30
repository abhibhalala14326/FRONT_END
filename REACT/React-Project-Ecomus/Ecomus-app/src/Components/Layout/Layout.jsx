import React from "react";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Products from "../Produtcts/Produtcs";
import Blog from "../Layout/blog/Blog";
import Page from "./pages/Page";
import Navbar from "../Helping-Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
          path: "/produtcs",
          element: <Products />,
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
