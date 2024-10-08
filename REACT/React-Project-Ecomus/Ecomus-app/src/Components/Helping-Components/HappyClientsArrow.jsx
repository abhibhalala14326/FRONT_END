import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";


import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowLeftSLine } from "react-icons/ri";


const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} next-arrow right-2 border rounded-[50%]   border-black border-solid w-10 h-10  flex items-center justify-center  overflow-hidden  absolute text-white  cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <RiArrowRightSLine className="text-xl  text-black flex justify-center items-center absolute w-full h-full px-1 hover:bg-black hover:text-white text-center top-0" />
    </div>
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} prev-arrow left-2 border rounded-[50%]  border-black border-solid w-10 h-10  flex items-center justify-center overflow-hidden   absolute text-white  cursor-pointer`}
      style={{ ...style, zIndex: 1 }}
      onClick={onClick}
    >
      <RiArrowLeftSLine className="text-2xl text-black flex justify-center  items-center absolute w-full h-full px-1 hover:bg-black hover:text-white text-center top-0" />
    </div>
  );
};

export { NextArrow, PrevArrow };
