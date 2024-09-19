import React from 'react'
import { IoStar } from "react-icons/io5";


import img from "../../assets/electronic-16.jpg";


const HappyClients = () => {
  return (
    <>
        <div className="w-[90%] mx-auto bg-card border h-[400px] bg-white flex flex-col justify-center border-border rounded-lg shadow-md p-4">
        <div className="flex items-center mb-2">
          <span className="text-green-500 flex gap-1 text-[17px]">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </span>
        </div>
        <h2 className="text-lg font-semibold text-[15px]">
          Great Selection and Quality
        </h2>
        <p className="text-[17px] italic my-2">
          "I love the variety of styles and the high-quality clothing on this
          web fashion site."
        </p>
        <p className="font-medium text-xl">Allen Lyn</p>
        <p className="text-sm text-muted-foreground">Customer from France</p>
        <div className='flex justify-center p-3 mt-2'>
          <p className="h-[1px] bg-[#00000044] w-[95%] "></p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-5">
            <img
              undefinedhidden="true"
              alt="SoundForm Rise"
              src={img}
              className="w-20 h-20 mr-2"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[15px]">SoundForm Rise</span>
              <span className="text-[17px] font-medium text-primary">
                $7.95
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HappyClients

