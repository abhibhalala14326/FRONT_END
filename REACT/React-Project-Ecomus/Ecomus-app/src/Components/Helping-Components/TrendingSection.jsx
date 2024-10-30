import React from "react";
import Slider from "react-slick";
import img from "../../assets/electronic_1.jpg";
import img1 from "../../assets/electronic_9.jpg";
import img2 from "../../assets/electronic_10.png";
import img3 from "../../assets/electronic_11.png";
import img4 from "../../assets/electronic_12.png";
import img5 from "../../assets/electronic_13.png";
import img6 from "../../assets/electronic_14.png";
import img7 from "../../assets/electronic_15.png";
import img8 from "../../assets/electronic_16.jpg";
import img9 from "../../assets/electronic_17.jpg";
import img10 from "../../assets/electronic_18.jpg";
import img11 from "../../assets/electronic_19.jpg";

import { BiSolidShow } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { TbArrowsCross } from "react-icons/tb";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const trendingSection = [
    {
      id:1,
      img: img,
      hoverImg: img1,
      title: "Ultraglass 2 Treated Screen Protector for iPhone 15 Pro",
      offer: false,
      offerPrice:'',
      price: "39.99",
    },
    {
      id:2,
      img: img2,
      hoverImg: img3,
      title: "Smart Light Switch with Thread",
      offer: false,
      price: "49.99",
    },
    {
      id:3,
      img: img4,
      hoverImg: img5,
      title: "SoundForm Rise",
      offer: true,
      offerPrice:79.99,
      price: "100.00",
    },
    {
      id:4,
      img: img6,
      hoverImg: img7,
      title: "Wireless on- Ear HeadPhones For Kids",
      offer: true,
      price: "34.99",
      offerPrice:24.99
    },
    {
      id:5,
      img: img8,
      hoverImg: img9,
      title: "3-in-1 Wireless Charger with official MagSafe Charging 15W",
      offer: true,
      price: "149.99",
      offerPrice:127.49,
    },
    {
      id:6,
      img: img10,
      hoverImg: img11,
      title: "3-in-1 Wireless charger for Apple",
      offer: false,
      price: "119.99",
    },
  ];

  return (
    <div>
      <p className="sm:text-5xl text-2xl text-center sm:text-left font-medium p-10">Trending Products</p>
      <Slider {...settings} className="p-4">
        {trendingSection.map((item, index) => (
          <div
            key={index}
            className="w-full h-auto relative lg:w-full group overflow-hidden "
          >
            <div className="w-full h-full overflow-hidden relative group/card lg:w-full">
              <div className="absolute flex justify-center sm:hidden items-center bottom-0 h-14 w-full gap-2">
                <BiSolidShow className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                <IoMdHeartEmpty className="bg-white text-4xl p-2 max-md:hidden rounded hover:bg-black hover:text-white" />
                <RiShoppingBag2Fill className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                <TbArrowsCross className="bg-white text-4xl p-2 max-md:hidden rounded hover:bg-black hover:text-white" />
              </div>

              {/* Main Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full group-hover/card:opacity-0  hover:scale-105 object-cover duration-1000"
              />

              {/* Hover Image */}
              <div className="w-full h-full opacity-0 inset-0 lg:w-full group-hover/card:opacity-100 duration-1000 absolute">
                <div className="relative">
                  <img
                    src={item.hoverImg}
                    alt={item.title}
                    className="w-full h-full hover:scale-105 object-cover duration-1000"
                  />
                  <div className="absolute flex justify-center items-center bottom-6 h-14 w-full gap-2">
                    <BiSolidShow className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                    <IoMdHeartEmpty className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                    <RiShoppingBag2Fill className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                    <TbArrowsCross className="bg-white text-4xl p-2 rounded hover:bg-black hover:text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[100px] px-2 mt-5 capitalize sm:text-[17px] text-sm">
              <p className="ml-3 sm:text-[16px] text-[17px] hover:text-[#66FF00] duration-500">
                {item.title}
              </p>
              <div className="flex">
                <p
                  className={`mt-3 ml-3 text-[20px] sm:text-[16px] font-semibold ${
                    item.offer ? "line-through text-black" : ""
                  }`}
                >
                  &#36; {item.price}
                </p>
                {item.offer && (
                  <p className="mt-3 ml-3 text-[20px] sm:text-[16px] font-semibold text-red-600">
                    &#36; {item.offerPrice}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingSection;
