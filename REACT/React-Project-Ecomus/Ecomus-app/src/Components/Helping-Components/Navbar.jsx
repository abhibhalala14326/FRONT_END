import React from "react";
import SimpleSlider from "../Helping-Components/TopSlider.jsx";
import Dropdown from "../Helping-Components/Dropdown.jsx";
import Eur from "../../assets/european-union.png";
import logo from "../../assets/logo.svg";
import { ProductsPagesList } from "../Shop/PagesList";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Navsidebar from "../Helping-Components/Navsidebar.jsx";

const Navbartop = () => {
  return (
    <>
      <header>
        <nav className="w-full bg-black text-white flex justify-around items-center py-2">
          <div className="lg:flex gap-5 sm:hidden min-[320px]:hidden ">
            <p>(+333) 123-168</p>
            <p>sayhello@ecomus.com</p>
          </div>
          <SimpleSlider />
          <div className="lg:flex gap-10  sm:hidden min-[320px]:hidden">
            <Dropdown name="EUR" img={Eur} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbartop;

let SideBAr = 0;

export const Navbar1 = () => {
  const [set, setData] = useState(" ");
  const setpage = () => {
    setData(<ProductsPagesList />);
  };

  const setpage1 = () => {
    setData("");
  };

  const [Nav, setDataNav] = useState(" ");
  const setNavbar = () => {
    if (SideBAr == 0) {
      setDataNav(<Navsidebar />);
      SideBAr = 1;
    } else {
      setDataNav("");
      SideBAr = 0;
    }
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className=" lg:flex sm:flex md:flex  items-center flex w-full justify-between sm:justify-between p-4">
          <i
            className="ri-list-unordered text-3xl lg:hidden sm:block "
            onClick={setNavbar}
          ></i>
          <div className="">
            <img src={logo} className="" alt="Flowbite Logo" />
          </div>

          <div
            className="hidden w-full md:hidden lg:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium lg:flex flex-col sm:hidden  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 px-3  bg- rounded md:bg-transparent  md:p-0 dark:text-white "
                  aria-current="page"
                >
                  Home
                  <i className="ri-arrow-down-s-line text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Shop
                  <i className="ri-arrow-down-s-line text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text- dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onMouseEnter={setpage}
                  onMouseLeave={setpage1}
                >
                  Products
                  <i className="ri-arrow-down-s-line text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text- dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pages
                  <i className="ri-arrow-down-s-line text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text- dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                  <i className="ri-arrow-down-s-line text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="text-2xl lg:flex flex gap-3"
            style={{ fontFamily: "" }}
          >
            <i className="ri-search-line lg:inline sm:flex"></i>
            <i className="ri-user-line lg:flex sm:hidden min-[320px]:hidden "></i>
            <i className="ri-heart-2-line relative lg:block sm:hidden min-[320px]:hidden ">
              <div className="absolute text-[15px] bg-[green] font-bold border w-5 h-5 -top-0 -right-3 flex justify-center items-center rounded-[50%]">
                0
              </div>
            </i>
            <i className="ri-shopping-bag-2-line relative  lg:block">
              <div className="absolute text-[15px] bg-[green] font-bold border w-5 h-5 -top-0 -right-2 flex justify-center items-center rounded-[50%]">
                0
              </div>
            </i>
          </div>
        </div>
      </nav>
      {set}
      {Nav}
    </div>
  );
};
