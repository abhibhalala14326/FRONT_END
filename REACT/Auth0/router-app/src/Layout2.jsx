import React from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { createBrowserRouter , RouterProvider , Router } from 'react-router-dom'
import Profile from './components/Profile'

// const Layout2 = () => {
//     const List = createBrowserRouter( [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <AboutUs />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//     ]);
//   return (
//     <div>
//       <RouterProvider router={List} />
//     </div>
//   )
// }



const Layout2 = () => {
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
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: <Profile />,
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
export default Layout2
