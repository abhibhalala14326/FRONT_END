import React from "react";
import Slider from "react-slick";
import Category from "./Category";
import TItle from "./TItle";
function CategorySlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
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
      <div className="flex flex-col w-full h-auto items-start mt-10 justify-center relative py-10  ">
        <TItle heding={"Shop by category"} />

        <div className="CategorySlider flex flex-col w-full h-auto  items-center justify-evenly static ">
          <div className="slider-container flex justify-center w-[95%]  flex-col py-4  ">
            <Slider {...settings}>

              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategorySlider;
