import React from "react";
import Slider from "react-slick";
import BlogPost from "./BlogPost";
import { NextArrow , PrevArrow } from "./BlogPostArrow";

function BlogPostSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };
  return (
    <div className="flex justify-center mt-10 h-auto w-full pl-4 overflow-hidden">
      <div className="slider-container md:w-[100%] sm:pl-4 w-full ">
        <Slider {...settings}>
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </Slider>
      </div>
    </div>
  );
}

export default BlogPostSlider;
