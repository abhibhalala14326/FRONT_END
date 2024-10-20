import React from "react";
import Slider from "react-slick";
import Item from "./Item";

function ItemSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex justify-center  ml-5">
      <div className="slider-container  overflow-hidden w-[95%]">
        <Slider {...settings}>
          <Item />
          <Item />
          <Item />
        </Slider>
      </div>
    </div>
  );
}

export default ItemSlider;
