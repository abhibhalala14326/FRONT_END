import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaAngleLeft } from "react-icons/fa6";



const ProductsTopNaviget = () => {
  return (
    <div className='flex  sm:flex-row flex-col gap-4 py-10 justify-between'>
      <div className="flex gap-3 items-center">
        <p>Home</p>
        <FaAngleRight />
        <p>Women</p>
        <FaAngleRight />

        <p>Cotton jersey top</p>
      </div>

      <div className="flex  text-2xl">
        <FaAngleLeft />

        <HiOutlineShoppingCart />
        <FaAngleRight />
      </div>
    </div>
  );
}

export default ProductsTopNaviget
