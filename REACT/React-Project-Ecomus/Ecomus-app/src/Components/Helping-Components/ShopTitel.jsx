import React from 'react'
import img1 from "../../assets/page-title-blog.png";

const ShopTitel = () => {
  return (
    <div className='flex  flex-col justify-center items-center h-[40vh]' style={{background:`url(${img1})`, backgroundSize:'cover'  }}>
      <p className="sm:text-5xl text-2xl">New Arrival</p>
      <p className="sm:text-[16px] text-[14px] text-[#545454]">
        Shop through our latest selection of Fashion
      </p>
    </div>
  );
}


export default ShopTitel



