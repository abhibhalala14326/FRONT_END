import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <ul className="flex gap-6 justify-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md ${
                  isActive
                    ? "bg-white text-blue-600"
                    : "hover:bg-blue-500 hover:text-white"
                }`
              }
            >
              Expense List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AddExpense"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md ${
                  isActive
                    ? "bg-white text-blue-600"
                    : "hover:bg-blue-500 hover:text-white"
                }`
              }
            >
              Expense ADD
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="flex-grow p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
