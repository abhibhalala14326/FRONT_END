import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

import { FaArrowRightLong } from "react-icons/fa6";


const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} next-arrow  text-black   border border-black border-solid w-7 h-7   absolute right-0 sm:-top-[13%] lg:-top-[15%] max-sm:top[10%] -top-[16%]  cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowRightLong className="text-xl text-blackflex justify-center items-center absolute w-full h-full px-1 hover:bg-black hover:text-white text-center top-0" />
    </div>
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} prev-arrow left-[75%] -top-[16%]  lg:left-[94%] sm:left-[90%] border sm:-top-[13%] border-black border-solid w-7 h-7  flex items-center justify-center    lg:-top-[15%] absolute text-white  cursor-pointer`}
      style={{ ...style, zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowLeftLong className="text-xl text-black flex justify-center  items-center absolute w-full h-full px-1 hover:bg-black hover:text-white text-center top-0" />
    </div>
  );
};

export { NextArrow, PrevArrow };
