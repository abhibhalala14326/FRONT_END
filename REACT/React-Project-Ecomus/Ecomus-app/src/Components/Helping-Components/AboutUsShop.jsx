import React from "react";
import Slider from "react-slick";

import galleryImg1 from "../../assets/gallery_1.jpg";
import galleryImg2 from "../../assets/gallery-2.jpg";
import galleryImg3 from "../../assets/gallery-3.jpg";
import galleryImg4 from "../../assets/gallery-4.jpg";
import galleryImg5 from "../../assets/gallery-5.jpg";

const AboutShopGram = () => {
  const galleryImages = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, 
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="containerSection">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Shop Gram</h1>
        <p className="tracking-wider">
          Inspire and let yourself be inspired, from one unique fashion to
          another.
        </p>
      </div>
      <Slider {...settings} className="my-10">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aboutShopGram rounded-xl overflow-hidden relative group px-2"
          >
            <img
              src={image}
              alt={`Gallery Image `}
              className="aboutShopGramImg group-hover:scale-110 duration-[3s] w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutShopGram;
