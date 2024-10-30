import React from "react";
import Slider from "react-slick";
import BlogPost from "./BlogPost";
import { NextArrow, PrevArrow } from "./BlogPostArrow";
import img1 from "../../assets/electronic-Post-img-1.jpg";
import img2 from "../../assets/Blogpost-2.jpg";
import img3 from "../../assets/Blogpost-3.jpg";
import img5 from "../../assets/blogpost-5.jpg";
import img6 from "../../assets/blogpost-6.jpg";
import img4 from "../../assets/blogpost-1.jpg";


function BlogPostSlider() {
  const blogPosts = [
    {
      img: img1,
      title: "Pop-punk is back in fashion",
      category: "Accessories",
    },
    {
      img: img2,
      title: "the next generation of leather alternatives",
      category: "Gadgets",
    },
    {
      img: img3,
      title: "an exclusive clothing collaboration",
    },
    {
      img: img4,
      title: "the next generation of leather alternatives ",
    },
    {
      img: img5,
      title: "the next generation of leather alternatives",
    },
    {
      img: img6,
      title: "the next generation of leather alternatives",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center mt-10 h-auto w-full pl-4 overflow-hidden">
      <div className="slider-container md:w-[100%] sm:pl-4 w-full">
        <Slider {...settings}>
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              img={post.img}
              title={post.title}
             
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BlogPostSlider;
