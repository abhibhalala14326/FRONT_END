import React from 'react'
import { FaAngleRight } from "react-icons/fa6";


const ShopPageButton = () => {
  return (
    <div className="flex justify-center w-full gap-5 py-32">
      <p className="h-10 w-10  shadow-xl text-center rounded-sm hover:bg-blue-600 flex justify-center items-center text-black">
        1
      </p>
      <p className="h-10 w-10 bg-black text-center rounded-sm hover:bg-blue-600 flex justify-center items-center text-white">
        2
      </p>
      <p className="h-10 w-10 bg-black text-center rounded-sm hover:bg-blue-600 flex justify-center items-center text-white">
        3
      </p>
      <p className="h-10 w-10 bg-black text-center rounded-sm hover:bg-blue-600 flex justify-center items-center text-white">
        4
      </p>
      <p className="h-10 w-10 bg-black text-center rounded-sm hover:bg-blue-600 flex justify-center items-center text-white">
        <FaAngleRight />
      </p>
    </div>
  );
}

export default ShopPageButton
