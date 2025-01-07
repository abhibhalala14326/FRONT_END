import React from 'react'
import {  NavLink , Outlet} from 'react-router-dom'
import Breadcrumb from './Breadcrumb';




const Navbar = () => {
  return (
    <>
      <div>
        <nav className="flex justify-between items-center p-5 mb-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md">
          <div className="text-4xl font-bold tracking-wide">Logo</div>
          <div>
            <ul className="flex gap-6">
              <li className="hover:text-gray-400 transition duration-200">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400 font-semibold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-gray-400 transition duration-200">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400 font-semibold" : ""
                  }
                >
                  AboutUS
                </NavLink>
              </li>
              <li className="hover:text-gray-400 transition duration-200">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400 font-semibold" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="hover:text-gray-400 transition duration-200">
                <NavLink
                  to="/loderdata"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400 font-semibold" : ""
                  }
                >
                  LoderData
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Breadcrumb/>
        <Outlet />
      </div>
    </>
  );
}; 

export default Navbar
