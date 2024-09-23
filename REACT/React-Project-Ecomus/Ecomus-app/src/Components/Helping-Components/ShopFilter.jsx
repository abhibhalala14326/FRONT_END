import React from 'react'
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
const ShopFilter = () => {
  return (
    <div className="flex justify-between md:px-14 py-5">
      <div className='flex gap-4 px-4 border items-center'>
        <IoFilterSharp className="font-medium text-[29px]" />
        <p className="font-medium text-[17px]">FILTER</p>
      </div>
      <p></p>
      <div className="flex items-center gap-8 border px-3">
        <p className="text-[17px]">Featured</p>
        <IoIosArrowDown className="text-[17px]" />
      </div>
    </div>
  );
}

export default ShopFilter
