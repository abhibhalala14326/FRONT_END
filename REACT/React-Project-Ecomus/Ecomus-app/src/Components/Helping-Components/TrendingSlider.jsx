import React from "react";
import Slider from "react-slick";
import TrendingSection from "./TrendingSection";
import TItle from '../Helping-Components/TItle'


function TrendingSlider() {


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    //   prevArrow: <button class="slide-arrow prev-arrow">zxcvbnmbvc</button>,
    // nextArrow: <button class="slide-arrow next-arrow"></button>,
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
        breakpoint: 1000,
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
      <div className="w-full flex  flex-col gap-10 h-full mt-10  overflow-hidden">
        <TItle heding={"Trending Products"} />
        <div className="w-full flex justify-center ">
          <div className="slider-container flex  items-center justify-center w-[90%] ">
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
