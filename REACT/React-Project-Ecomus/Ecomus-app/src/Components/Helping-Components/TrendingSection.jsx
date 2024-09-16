import React from 'react'
import img from "../../assets/electronic-12.png";
import { HiArrowsPointingIn } from "react-icons/hi2";

const TrendingSection = () => {
  return (
    <>
      <div className=" group w-[97%] py-7 h-[31%]  lg:h-[470px]   bg-transparent shadow-xl rounded-[30px] border mb-96 flex flex-col items-center justify-between">
        <div className="sm:h-[60vh] w-full relative overflow-hidden ">
          <img
            src={img}
            alt=""
            className=" object-contain  h-full w-full hover:scale-110 duration-1000  "
          />
          {/* <div className=" justify-center group-hover:flex duration-1000 absolute top-[80%] left-[25%]  items-center hidden text-2xl gap-2">
            <HiArrowsPointingIn className="bg-black text-white text-6xl  hover:bg-black h-[35px] w-[35px] " />
            <HiArrowsPointingIn className="bg-black text-white text-6xl  hover:bg-black  h-[35px] w-[35px] " />
            <HiArrowsPointingIn className="bg-black text-white text-6xl  hover:bg-black  h-[35px] w-[35px] " />
            <HiArrowsPointingIn className="bg-black text-white text-6xl  hover:bg-black  h-[35px] w-[35px] " />
          </div> */}
        </div>
        <div className="w-full h-[100px] relative  top-5 px-2 capitalize sm:text-[17px] text-sm">
          <p className="ml-3 sm:text-[16px] text-[20px]">
            ultraglass 2 treated screen protector for iphone 15 pro
          </p>
          <p className=" mt-3  text-[20px] sm:text-[16px] ml-3 font-semibold">
            &#36; 39.99
          </p>
        </div>
      </div>
    </>
  );
}

export default TrendingSection
