import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const list = [
    {
      to: "/",
      name: "Product",
    },
    {
      to: "/wis",
      name: "Wishlist",
    },
  ];

  return (
    <div>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center p-4 ">
          <h1 className="text-xl font-bold">My Store</h1>
          <ul className="flex space-x-4">
            {list.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 font-semibold"
                      : "text-gray-300 hover:text-white"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
