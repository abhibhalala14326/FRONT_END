import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { TbArrowsCross } from "react-icons/tb";

import img1 from "../../assets/white-1.jpg";
import img2 from "../../assets/asset_15.jpeg";
import img_1 from "../../assets/asset_16.jpeg";
import img4 from "../../assets/asset_18.jpeg";
import img5 from "../../assets/asset_19.jpeg";
import img6 from "../../assets/asset_20.jpeg";
import img7 from "../../assets/asset_21.jpeg";
import img8 from "../../assets/asset_22.jpeg";
import img9 from "../../assets/asset_23.jpeg";
import img10 from "../../assets/asset_24.jpeg";
import img11 from "../../assets/asset_25.jpeg";
import img12 from "../../assets/asset_26.jpeg";
import img13 from "../../assets/asset_17.jpeg";
import img14 from "../../assets/asset_35.jpeg";
import img15 from "../../assets/asset_36.jpeg";
import img16 from "../../assets/asset_37.jpeg";
import img17 from "../../assets/asset_38.jpeg";
import img18 from "../../assets/asset_39.jpeg";
import img19 from "../../assets/asset_40.jpeg";
import img20 from "../../assets/asset_41.jpeg";
import img21 from "../../assets/asset_43.jpeg";
import img22 from "../../assets/asset_44.jpeg";
import img23 from "../../assets/asset_45.jpeg";
import img24 from "../../assets/asset_46.jpeg";
import img25 from "../../assets/asset_47.jpeg";
import img26 from "../../assets/asset_48.jpeg";
import img27 from "../../assets/asset_50.jpeg";
import img28 from "../../assets/asset_51.jpeg";
import img29 from "../../assets/asset_52.jpeg";
import img30 from "../../assets/asset_53.jpeg";
import img31 from "../../assets/asset_54.jpeg";
import img32 from "../../assets/asset_49.jpeg";

import img3 from "../../assets/white-4.jpg";

const items = [
  {
    product_id: 1,
    product_name: "Ribbed Tank Top",
    price: 16.95,
    product_color_image: [
      {
        product_img: img1,
        Color: "Orange",
      },
      {
        product_img: img2,
        Color: "blue",
      },
    ],
    hover_img: img3,
    size: false,
    Sizes: ["L", "XL", "M"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 2,
    product_name: "Another Product",
    price: 25.99,
    product_color_image: [
      {
        product_img: img1,
        Color: "green",
      },
      {
        product_img: img2,
        Color: "yellow",
      },
    ],
    hover_img: img3,
    size: false,
    Sizes: ["S", "M", "L"],
    Offer: true,
    Time: true,
  },
  {
    product_id: 1,
    product_name: "Ribbed Tank Top",
    price: 16.95,
    product_color_image: [
      {
        product_img: img1,
        Color: "red",
      },
      {
        product_img: img2,
        Color: "blue",
      },
    ],
    hover_img: img3,
    size: false,
    Sizes: ["L", "XL", "M"],
    Offer: false,
    Time: false,
  },
];

const ShopItem = () => {
  return (
    <div className="container m-auto px-5 gap-10 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 sm:grid-cols-3 items-center justify-center w-full">
      {items.map((item) => {
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
                  <div
                    key={index}
                  >
                    <div
                      onMouseOver={() => setHoveredImg(crr)}
                      className={` ${
                        hoveredImg.Color == crr.Color
                          && "outline-1 outline outline-black outline-offset-2"
                          
                      } h-3 w-3 md:h-5 md:w-5 rounded-full shadow-[rgba(0,0,0,0.24)_0px_3px_8px] md:p-2`}
                      style={{ backgroundColor: crr.Color }}
                    >
                      {" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopItem;
