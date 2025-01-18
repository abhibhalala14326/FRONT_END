import React from 'react'
import { BrowserRouter , createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import AddBookPage from './AddBookPage'
import BookListPage from './BookListPage'
import Navbar from '../Componenets/Navbar';


const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <BookListPage />,
      },
      {
        path: "/addbook",
        element: <AddBookPage />,
      },
    ],
  },
]);

function Latout() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Latout
