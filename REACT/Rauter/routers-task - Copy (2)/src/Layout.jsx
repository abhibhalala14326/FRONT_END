import React from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom'
import LoderData from './pages/LoderData'
import Loder, {  LoaderApi } from './pages/Loder'
import UseParams, { Pramss } from './pages/UseParams'
import Err from './pages/Err'
import Blog from './pages/Blog'
import Faq from './pages/Faq'
import Product from './pages/Product'
import ProtectedRoutes from './components/ProtectedRoutes'




const Layout = () => {
  const List = createBrowserRouter([
    {
      path: "*",
      element: <Err />,
    },
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: 
            <ProtectedRoutes>
              <AboutUs />
            </ProtectedRoutes>
          ,
          children: [
            {
              path: "blog",
              element: <Blog />,
            },
            {
              path: "faq",
              element: <Faq />,
            },
            {
              path: "product",
              element: <Product />,
            },
          ],
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/loderData",
          element: <LoderData />,
          errorElement: <Err />,
          children: [
            {
              index: true,
              element: <Loder />,
              loader: LoaderApi,
            },

            {
              path: ":id",
              element: <UseParams />,
              loader: Pramss,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={List} />
    </div>
  );
};
export default Layout;