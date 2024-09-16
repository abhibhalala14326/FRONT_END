import React from "react";
import sliderimg1 from "../../assets/Slideshow_Electronics1.jpg";
import sliderimg2 from "../../assets/Slideshow_Electronics2.jpg";
import sliderimg3 from "../../assets/Slideshow_Electronics3.jpg";
import MainSlider from "./MainSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOffer = () => {
  const menu = [
    {
      id: 1,
      OfferName: "up to 40% off chargers and more.",
      title: "Savings for dads and grands.",
      button: "Shop collection",
      bgimg: sliderimg1,
    },
    {
      id: 2,

      OfferName: "up to 40% off chargers and more.",
      title: "Modern Design",
      button: "Shop collection",
      bgimg: sliderimg2,
    },
    {
      id: 3,
      OfferName: "up to 40% off chargers and more.",
      title: "Fast Charging",
      button: "Shop collection",
      bgimg: sliderimg3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full  flex justify-center  h-auto overflow-hidden ">
      <div className="slider-container " style={{width:'100%'}}>
        <Slider {...settings}>
          {menu.map((item) => (
            <MainSlider
              key={item.id}
              OfferName={item.OfferName}
              title={item.title}
              bgimg={item.bgimg}
              button={item.button}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderOffer;
