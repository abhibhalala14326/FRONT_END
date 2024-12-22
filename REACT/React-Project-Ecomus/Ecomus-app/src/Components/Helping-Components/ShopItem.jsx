import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TbArrowsCross } from "react-icons/tb";

const ShopItem = ({ items }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const perpages = 5 
  

  const lastindexinpage = currentPage * perpages 
  const fristIndexOfPage = lastindexinpage - perpages 
  const totalPages = Math.ceil(items.length / perpages)

  const Product = items.slice(fristIndexOfPage , lastindexinpage)
  

  return (
    <>
      <div className="container m-auto px-5 gap-10 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 sm:grid-cols-3 items-center justify-center w-full">
        {Product.map((item) => {
          const [hoveredImg, setHoveredImg] = useState(
            item.product_color_image[0]
          );

          return (
            <div
              key={item.product_id}
              className="mr-10 overflow-hidden pb-7 w-full"
            >
              <div className="w-full h-full overflow-hidden relative group/card lg:w-full">
                <div className="absolute flex justify-center sm:hidden items-center bottom-0 h-14 w-full gap-2 ">
                  <BiSolidShow className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                  <IoMdHeartEmpty className="bg-white text-4xl p-2 max-md:hidden rounded hover:bg-black hover:text-white" />
                  <RiShoppingBag2Fill className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                  <TbArrowsCross className="bg-white text-4xl p-2 max-md:hidden rounded hover:bg-black hover:text-white" />
                </div>

                {/* Main Image */}
                <img
                  src={hoveredImg.product_img}
                  alt={item.product_name}
                  className="w-full h-full group-hover/card:opacity-0 bg-black hover:scale-105 object-cover duration-1000"
                />

                {/* Offer Label */}
                {item.Offer && (
                  <div className="flex justify-end absolute top-2 right-2 z-50 ">
                    <p className=" text-sm px-4 py-1 text-white bg-[#fc5732] rounded-full ">
                      -33&#37;
                    </p>
                  </div>
                )}

                {/* Time Countdown */}
                {item.Time && (
                  <div className="absolute flex w-full items-center sm:bottom-[5%] bottom-[15%] justify-center ">
                    <div className="flex justify-center px-3 py-1 relative text-[red]  gap-1 bg-white">
                      <p>11d</p>
                      <p>:</p>
                      <p>15h</p>
                      <p>:</p>
                      <p>45m</p>
                      <p>:</p>
                      <p>34s</p>
                    </div>
                  </div>
                )}

                {/* Hover Image */}
                <div className="w-full h-full opacity-0 inset-0 lg:w-full group-hover/card:opacity-100 duration-1000 absolute">
                  <div className="relative">
                    <img
                      src={item.hover_img}
                      alt={item.product_name}
                      className="w-full h-full hover:scale-105 object-cover duration-1000"
                    />

                    <div className="absolute flex justify-center items-center bottom-6 h-14 w-full gap-2 ">
                      <BiSolidShow className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                      <IoMdHeartEmpty className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                      <RiShoppingBag2Fill className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                      <TbArrowsCross className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                    </div>

                    {/* Size Option */}
                    {item.size && (
                      <div className="flex justify-center gap-4 text-white absolute bottom-0 bg-black/50 h-auto w-full">
                        {item.Sizes.map((size, index) => (
                          <p key={index} className="text-[12px] py-1">
                            {size}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Item Details */}
              <div className="pl-2 text-sm md:text-base flex flex-col gap-1">
                <p>{item.product_name}</p>
                <p className="font-[500]">&#36;{item.price}</p>
                <div className="flex items-center gap-2">
                  {item.product_color_image.map((crr, index) => (
                    <div key={index}>
                      <div
                        onMouseOver={() => setHoveredImg(crr)}
                        className={`${
                          hoveredImg.Color === crr.Color &&
                          "outline-1 outline outline-black outline-offset-2"
                        } h-3 w-3 md:h-5 md:w-5 rounded-full shadow-[rgba(0,0,0,0.24)_0px_3px_8px] md:p-2`}
                        style={{ backgroundColor: crr.Color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* <p>{Math.ceil(items.length / perpages)}</p> */}
      </div>

      <div className="flex justify-center items-center p-3 gap-2">
        <button
          className="text-3xl"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          <FaAngleLeft />
        </button>
        
        <p className="h-10 w-10  shadow-xl text-center rounded-sm hover:bg-blue-600 flex justify-center items-center text-black">
          {currentPage}
        </p>
        <button
          className="text-3xl"
          onClick={() => setCurrentPage((next) => next + 1)}
          disabled={currentPage === totalPages}
        >
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default ShopItem;
