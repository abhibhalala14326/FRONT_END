import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Wislist from "./Wislist";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";

const List = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element:<Products/>
      },
      {
        path:'/wis',
        element:<Wislist/>
      }
    ],
  },
]);

const Layout = () => {
  return <div>
    <RouterProvider router={List}/>
  </div>;
};

export default Layout;
