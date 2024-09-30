import React from "react";
import img from "../../assets/electronic-12.png";
import { HiArrowsPointingIn } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { TbArrowsCross } from "react-icons/tb";

const TrendingSection = () => {
  return (
    <>
      <div className=" group w-[97%] sm:py-7  h-[80vh] lg:h-[450px]   bg-[#f8f4f4a2]  rounded-[30px] border mb-10 flex flex-col items-center justify-between">
        <div className="w-full h-full overflow-hidden relative group/card lg:w-full">
          <div className="absolute flex justify-center sm:hidden  items-center bottom-0 h-14 w-full gap-2 ">
            <BiSolidShow className="bg-white  text-4xl p-2 rounded hover:bg-black hover:text-white" />
            <IoMdHeartEmpty className="bg-white text-4xl p-2  max-md:hidden rounded hover:bg-black hover:text-white" />
            <RiShoppingBag2Fill className="bg-white text-4xl   p-2 rounded hover:bg-black hover:text-white" />
            <TbArrowsCross className="bg-white text-4xl p-2 max-md:hidden rounded hover:bg-black hover:text-white" />
          </div>
          <img
            src={img}
            alt=''
            className="w-full h-full overflow-hidden  group-hover/card:opacity-0    hover:scale-105 object-cover duration-1000"
          />

          <div className="w-full h-full opacity-0 inset-0 lg:w-full group-hover/card:opacity-100 duration-1000  absolute  ">
            <div className="relative">
              <img
                src={img}
                alt=''
                className="w-full h-full overflow-hidden hover:opacity-1  hover:scale-105 object-cover duration-1000"
              />
              <div className="absolute flex justify-center items-center bottom-0 h-14 w-full gap-2 ">
                <BiSolidShow className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                <IoMdHeartEmpty className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                <RiShoppingBag2Fill className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                <TbArrowsCross className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[100px] relative  top-5 px-2 capitalize sm:text-[17px] text-sm">
          <p className="ml-3 sm:text-[16px] text-[17px]">
            ultraglass 2 treated screen protector for iphone 15 pro
          </p>
          <p className=" mt-3  text-[20px] sm:text-[16px] ml-3 font-semibold">
            &#36; 39.99
          </p>
        </div>
      </div>
    </>
  );
};

export default TrendingSection;
