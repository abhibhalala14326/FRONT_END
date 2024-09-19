import React from 'react'
import { FiBox } from "react-icons/fi";

const Shipping = () => {
  return (
    <section className="flex h-[50vh] justify-center items-center bg-[#f5f5f5] mb-10">
      <div className=" flex gap-4 w-[25%]">
        <div className="h-[100px] w-[100px] rounded-full bg-white flex justify-center items-center">
          <FiBox className="text-5xl" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">Free Shipping</p>
          <p className="text-[14px]">Free shipping over order $120</p>
        </div>
      </div>

      <div className="bg-[#f5f5f5] flex gap-4 w-[25%]">
        <div className="h-[100px] w-[100px] rounded-full bg-white flex justify-center items-center">
          <FiBox className="text-5xl" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">Free Shipping</p>
          <p className="text-[14px]">Free shipping over order $120</p>
        </div>
      </div>

      <div className="bg-[#f5f5f5] flex gap-4 w-[25%]">
        <div className="h-[100px] w-[100px] rounded-full bg-white flex justify-center items-center">
          <FiBox className="text-5xl" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">Free Shipping</p>
          <p className="text-[14px]">Free shipping over order $120</p>
        </div>
      </div>

      <div className="bg-[#f5f5f5] flex gap-4 w-[25%]">
        <div className="h-[100px] w-[100px] rounded-full bg-white flex justify-center items-center">
          <FiBox className="text-5xl" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">Free Shipping</p>
          <p className="text-[14px]">Free shipping over order $120</p>
        </div>
      </div>
    </section>
  );
}

export default Shipping
