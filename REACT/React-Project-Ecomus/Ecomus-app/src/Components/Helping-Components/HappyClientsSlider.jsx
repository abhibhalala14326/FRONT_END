import React from 'react'
import Slider from "react-slick";
import HappyClients from './HappyClients';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow , PrevArrow } from './HappyClientsArrow';


const HappyClientsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full overflow-hidden mt-10 bg-[#f5f5f5] py-14">
      <div className="flex flex-col gap-4 mb-7 items-center ">
        <p className="sm:text-[42px] text-[30px]">Happy Clients</p>
        <p className="text-[16px] sm:w-full text-center w-[70%]">
          See what our satisfied customers have to say about our electronic
          accessories.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <HappyClients />
          <HappyClients />
        </Slider>
      </div>
    </div>
  );
}

export default HappyClientsSlider


