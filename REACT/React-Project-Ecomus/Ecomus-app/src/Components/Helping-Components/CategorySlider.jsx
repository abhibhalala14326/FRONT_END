import React from "react";
import Slider from "react-slick";
import Category from "./Category";
import Title from "./Title";
import img1 from "../../assets/electronic_1.jpg";
import img2 from "../../assets/electronic_2.jpg";
import img3 from "../../assets/electronic_3.jpg";
import img4 from "../../assets/electronic_4.png";
import img5 from "../../assets/electronic_5.jpg";

function CategorySlider() {
  const categories = [
    { img: img1, title: "Screen Protection" },
    { img: img2, title: "Wireless Chargers" },
    { img: img3, title: "Smart Watches" },
    { img: img4, title: "Headphones" },
    { img: img5, title: "Headphones" },
    // Add more categories if needed
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <div className="flex flex-col w-full h-auto items-start mt-10 justify-center relative py-10">
      <Title heding="Shop by category" />

      <div className="CategorySlider flex flex-col w-full h-auto items-center justify-evenly">
        <div className="slider-container flex justify-center w-[95%] flex-col py-4">
          <Slider {...settings}>
            {categories.map((category, index) => (
              <Category key={index} img={category.img} title={category.title} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CategorySlider;
