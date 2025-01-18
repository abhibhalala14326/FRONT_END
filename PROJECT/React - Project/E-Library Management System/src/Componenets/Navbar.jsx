import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">Book Manager</div>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-800" : "hover:bg-blue-700"
                  }`
                }
              >
                Book List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addbook"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md ${
                    isActive ? "bg-blue-800" : "hover:bg-blue-700"
                  }`
                }
              >
                Add Book
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar
