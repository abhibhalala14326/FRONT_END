import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
 const navigator = useNavigate();
    const isAuthenticated = localStorage.getItem("authenticate");

  return (
    <nav className="bg-gray-800 p-4">
      <ul
        className="flex 
        sm:flex-row justify-around space-y-2 sm:space-y-0 sm:space-x-4"
      >
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
          {isAuthenticated ? (
            <button onClick={() =>{ localStorage.removeItem("authenticate") 
                navigator('/login')
            }
            }>
              logoout
            </button>
          ) : (
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
          )}
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
