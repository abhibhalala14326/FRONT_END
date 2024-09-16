import React from "react";
import "remixicon/fonts/remixicon.css";
import Dropdown from "../Helping-Components/Dropdown";
import Eur from "../../assets/european-union.png";


const Navsidebar = () => {
  return (
    <>
      <div className="w-[400px]  h-screen relative ">
        <div className="">
          <ul className="flex  flex-col gap-4 relative left-4">
            <li className="w-[59vw] flex justify-between  text-xl  font-[400]">
              <p> Home</p> <i class="ri-add-line"></i>
            </li>

            <li className="w-[59vw] flex justify-between text-xl  font-[400]">
              <p> Shop</p> <i class="ri-add-line"></i>
            </li>

            <li className="w-[59vw] flex justify-between text-xl  font-[400]">
              <p> Products</p>
              <i class="ri-add-line"></i>
            </li>

            <li className="w-[59vw] flex justify-between text-xl  font-[400]">
              <p> Pages</p> <i class="ri-add-line"></i>
            </li>

            <li className="w-[59vw] flex justify-between text-xl  font-[400]">
              <p> Blog</p> <i class="ri-add-line"></i>
            </li>
          </ul>

          <div className="flex gap-5 relative top-12 h-auto left-4">
            <button className="flex justify-center items-center  gap-2 bg-[#14050556] h-6 px-3 py-5 rounded-md">
              <i class="ri-heart-line text-2xl"></i>
              Wishlist
            </button>
            <button className="flex justify-center items-center  gap-2 bg-[#14050556] h-6 px-4 py-5 rounded-md">
              <i class="ri-search-line text-2xl"></i>
              Sherch
            </button>
          </div>
        </div>

        <div
          className="relative top-24 font-[400] left-4"
          style={{ fontFamily: "Albert Sans" }}
        >
          <h1>Need Help ?</h1>
          <address>
            Address : 1234 fashion Street , Suite 567 New York, NK 10001
            <p>Email:Abhibhalala07@gmail.com</p>
            <p>Phone:997950102</p>
          </address>
        </div>

        <div className="ml-4 absolute top-[90%]">
          <button className="flex justify-center items-center  gap-2 bg-[#14050556] h-6 px-4 py-5 rounded-md">
            <i class="ri-user-line text-2xl"></i>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navsidebar;
