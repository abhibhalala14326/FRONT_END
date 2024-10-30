import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import img1 from "../../assets/electronic_1.jpg";

const Category = ({img , title}) => {
  return (
    <div className="w-full flex overflow-hidden rounded-3xl h-auto px-4 sm:px-0">
      <div className="w-full relative flex justify-center items-center overflow-hidden duration-1000 rounded-3xl">
        <img
          src={img}
          alt="Screen Protection"
          className="object-cover object-center hover:scale-105 duration-1000 w-[98%] rounded-3xl"
        />
        {/* Text Overlay */}
        <div className="absolute top-7 left-7 sm:left-5 text-shadow-lg">
          <p className="font-semibold text-xl sm:text-[20px] text-black">
            {title}
          </p>
          <p className="text-xl sm:text-[17px] mt-1 text-black">6 items</p>
        </div>
        {/* Button */}
        <button className="absolute sm:bottom-4 bottom-5 group bg-white flex items-center gap-2 duration-500 font-bold hover:bg-black hover:text-white justify-center sm:px-4 sm:py-3 px-3 py-2  border rounded-[40px] left-7 sm:left-5">
          Shop Now
          <FiArrowUpRight className="hidden text-2xl group-hover:block transform group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Category;
