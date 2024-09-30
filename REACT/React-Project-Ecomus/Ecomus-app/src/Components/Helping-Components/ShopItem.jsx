import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { TbArrowsCross } from "react-icons/tb";

import img1 from "../../assets/white-1.jpg";
import img2 from "../../assets/asset_15.jpeg";

const items = [
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    img: img1,
    colors: ["black", "orange", "pink"],
    img2: img2,
  },
];

const ShopItem = () => {
  return (
    <div className="container m-auto sm:grid-cols-3  px-5 gap-10 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 items-center justify-center w-full">
      {items.map((item) => (
        <div
          key={item.id}
          className="mr-10 overflow-hidden  pb-7 w-full shadow-lg "
        >
          <div className="w-full h-full overflow-hidden relative group/card lg:w-full">
            <div className="absolute flex justify-center sm:hidden  items-center bottom-0 h-14 w-full gap-2 ">
              <BiSolidShow className="bg-white  text-4xl p-2 rounded hover:bg-black hover:text-white" />
              <IoMdHeartEmpty className="bg-white text-4xl p-2  max-md:hidden rounded hover:bg-black hover:text-white" />
              <RiShoppingBag2Fill className="bg-white text-4xl   p-2 rounded hover:bg-black hover:text-white" />
              <TbArrowsCross className="bg-white text-4xl p-2 max-md:hidden rounded hover:bg-black hover:text-white" />
            </div>
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full overflow-hidden  group-hover/card:opacity-0   bg-black hover:scale-105 object-cover duration-1000"
            />

            <div className="w-full h-full opacity-0 inset-0 lg:w-full group-hover/card:opacity-100 duration-1000  absolute  ">
              <div className="relative">
                <img
                  src={item.img2}
                  alt={item.name}
                  className="w-full h-full overflow-hidden hover:opacity-1 bg-black hover:scale-105 object-cover duration-1000"
                />
                <div className="absolute flex justify-center items-center bottom-0 h-14 w-full gap-2 ">
                  <BiSolidShow className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                  <IoMdHeartEmpty className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                  <RiShoppingBag2Fill className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                  <TbArrowsCross className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="pl-2 text-sm md:text-base  flex flex-col gap-1">
            <p className="">{item.name}</p>
            <p className="font-[500]  ">&#36;{item.price}</p>
            <div className="flex items-center gap-2">
              {item.colors.map((color, index) => (
                <div
                  key={index}
                  className="sm:h-8 sm:w-8 h-6 w-6 border-black border flex items-center group/color justify-center rounded-[50%]"
                >
                  <p
                    className={`sm:h-6 sm:w-6 h-4 w-4 bg-[${color}] rounded-[50%] duration-300  group-hover/color:w-3 group-hover/color:h-3`}
                  ></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopItem;
