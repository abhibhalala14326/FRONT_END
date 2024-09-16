import React from "react";
import Slider from "react-slick";
import Item from "./Item";

function ItemSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="slider-container overflow-hidden sm:w-[98%] ">
          <Slider {...settings}>
            
            <Item />
            <Item />
            <Item />
            <Item />
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ItemSlider;
