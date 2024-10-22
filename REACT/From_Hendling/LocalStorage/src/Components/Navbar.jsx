import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex 
        sm:flex-row justify-around space-y-2 sm:space-y-0 sm:space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white hover:text-gray-400 ${
                isActive ? "font-bold border-b-2 border-white" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-white hover:text-gray-400 ${
                isActive ? "font-bold border-b-2 border-white" : ""
              }`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `text-white hover:text-gray-400 ${
                isActive ? "font-bold border-b-2 border-white" : ""
              }`
            }
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
