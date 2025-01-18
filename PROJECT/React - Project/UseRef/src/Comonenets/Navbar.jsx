import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const link = [
    {
      to: "/",
      LinkName: "Stopwatch",
    },
    {
      to: "/Counter",
      LinkName: "Counter",
    },
    {
      to: "/PlayingPausingvideo",
      LinkName: "Playing Pausing video",
    },
    {
      to: "/InputFocusing",
      LinkName: "Input Focusing",
    },
    {
      to: "/ScrollingImg",
      LinkName: "Scrolling Img",
    },
  ];

  return (
    <div className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4">
        <ul className="flex justify-between">
          <h1 className="text-2xl font-bold  px-4 py-2 rounded ">
            UseRef
          </h1>
          {link.map((link, index) => (
            <li key={index} className="flex justify-between items-center">
              <NavLink
                to={link.to}
                className="text-lg px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
                activeClassName="bg-gray-700 font-semibold"
              >
                {link.LinkName}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
