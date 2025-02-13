import React from "react";
import AddExpense from "../Components/AddExpense";
import ExpenseList from "../Components/ExpenseList";
import Navbar from "../Components/Navbar";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const List = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/AddExpense",
        element: <AddExpense />,
      },
      {
        path: "/",
        element: <ExpenseList />,
      },
    ],
  },
]);

const Layout = () => {
  return <div>
    <RouterProvider router={List}/>
  </div>;
};

export default Layout;
