import React from "react";
import Slider from "react-slick";
import Item from "./Item";
import img1 from "../../assets/electronic_6.jpg";
import img2 from "../../assets/electronic_7.jpg";


const items = [
  { id: 1, title: "Smart Assistant", titletwo: "Hot Accessories", img: img1 },
  { id: 2, title: "true Earbuds", titletwo: "fast and free shipping", img: img2 },
  
];

function ItemSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="flex justify-center ml-5">
      <div className="slider-container overflow-hidden w-[95%]">
        <Slider {...settings}>
          {items.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              titletwo={item.titletwo}
              img={item.img}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ItemSlider;
