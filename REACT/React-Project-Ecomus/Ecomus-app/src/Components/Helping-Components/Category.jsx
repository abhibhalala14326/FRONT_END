import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

import img1 from "../../assets/electronic-1.jpg";

const Category = () => {
  return (
    <>
      <div className="w-full flex overflow-hidden h-auto">
        <div className="sm:w-[50vw] sm:h-[55vh] w-full  h-[90vh]  relative flex justify-center items-center  overflow-hidden duration-1000">
          <img
            src={img1}
            alt=""
            className="object-cover object-center hover:scale-105 duration-1000 rounded-3xl h-[98%] w-[95%]"
          />
          <p className="absolute sm:top-7 top-7 left-7 font-[600] text-2xl sm:text-[18px]">
            Screen protection
          </p>
          <p className="absolute sm:top-16 top-16 text-xl left-7">6 item</p>
          <button className="absolute sm:bottom-4  bottom-5 group flex items-center gap-2 duration-500 font-bold hover:bg-black hover:text-white justify-center w-[130px] px-2 py-2   border-black border rounded-[40px] left-7">
            Shop Now <FiArrowUpRight className="hidden group-hover:block" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Category
