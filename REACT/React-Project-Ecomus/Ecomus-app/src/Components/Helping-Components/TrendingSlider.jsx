import React from "react";
import Slider from "react-slick";
import TrendingSection from "./TrendingSection";
import TItle from "../Helping-Components/TItle";
import { NextArrow, PrevArrow } from "./ArrowTrending"; 

function TrendingSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
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
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <div className="Trending w-full flex flex-col gap-10 h-full mt-10 relative overflow-hidden">
        <TItle heding={"Trending Products"} />
        <div className="w-full flex justify-center">
          <div className="slider-container w-[90%]">
            <Slider {...settings}>
              <TrendingSection />
              <TrendingSection />
              <TrendingSection />
              <TrendingSection />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingSlider;
