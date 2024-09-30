import React from "react";
import logo from "../../assets/logo.svg";
import "remixicon/fonts/remixicon.css";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { name: "Home", link: "/", icon: "ri-arrow-down-s-line" },
    { name: "Shop", link: "/shop", icon: "ri-arrow-down-s-line" },
    { name: "Products", link: "/products", icon: "ri-arrow-down-s-line" },
    { name: "Pages", link: "/pages", icon: "ri-arrow-down-s-line" },
    { name: "Blog", link: "/blog", icon: "ri-arrow-down-s-line" },
  ];

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="lg:flex sm:flex md:flex items-center flex w-full justify-between p-4">
          <i className="ri-list-unordered text-3xl lg:hidden sm:block"></i>
          <div>
            <NavLink to="/">
              <img src={logo} alt="Flowbite Logo" />
            </NavLink>
          </div>

          <div className="hidden lg:block" id="navbar-default">
            <ul className="font-medium lg:flex flex-col sm:hidden p-4 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    {item.name}
                    <i className={`${item.icon} text-2xl`}></i>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-2xl flex lg:flex gap-3">
            <i className="ri-search-line lg:inline sm:flex"></i>
            <i className="ri-user-line lg:flex hidden"></i>
            <i className="ri-heart-2-line relative lg:block hidden">
              <div className="absolute text-[15px] bg-[green] font-bold border w-5 h-5 -top-0 -right-3 flex justify-center items-center rounded-full">
                0
              </div>
            </i>
            <i className="ri-shopping-bag-2-line relative lg:block">
              <div className="absolute text-[15px] bg-[green] font-bold border w-5 h-5 -top-0 -right-2 flex justify-center items-center rounded-full">
                0
              </div>
            </i>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
