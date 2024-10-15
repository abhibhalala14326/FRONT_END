import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Import Slider from react-slick
import img1 from "../../assets/asset_49.jpeg";
import img2 from "../../assets/asset_48.jpeg";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("Beige");
  const [size, setSize] = useState("S");
  const [timeLeft, setTimeLeft] = useState({
    days: 11,
    hours: 15,
    minutes: 51,
    seconds: 13,
  });

  const [selectedImage, setSelectedImage] = useState(img2);

  const productImages = [img1, img2, img1, img2, img1, img1, img1];

  // Create a reference for the slider
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setSelectedImage(productImages[next]),
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const handleThumbnailClick = (img, index) => {
    setSelectedImage(img);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {/* Product Images */}
        <div className="grid grid-cols-1     md:grid-cols-[20%_80%] gap-4 ">
          {/* Thumbnail List */}
          <div className="flex md:flex md:flex-col md:h-svh  gap-2 max-md:order-1  overflow-auto scrollbar-hide">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index}`}
                className={`w-[100px] h-full object-cover  cursor-pointer border ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                }`}
                onClick={() => handleThumbnailClick(img, index)}
              />
            ))}
          </div>
          <div className="w-full  pr-5">
            <Slider ref={sliderRef} {...settings}>
              {productImages.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Product ${index}`}
                    className="w-full h-auto mb-4 border border-gray-300 rounded"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid gap-4">
          <h1 className="text-2xl mb-2">Cotton Jersey Top</h1>

          {/* Price and Offer Section */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-500 text-xl ">$8.00</span>
            <span className="line-through text-gray-500">$30.00</span>
            <span className="bg-red-200 text-red-700 px-2 py-1 rounded text-sm">
              20% OFF
            </span>
          </div>

          {/* Live Status */}
          <p className="text-gray-500 text-sm mb-3">
            <strong className="text-white px-2 py-1 bg-black">20</strong> people
            are viewing this right now
          </p>

          {/* Timer */}
          <div className="bg-gray-100 p-3 border border-red-500 rounded mb-4 max-w-md">
            <p className="text-red-500 font-semibold mb-1">
              HURRY UP! SALE ENDS IN:
            </p>
            <p className="text-red-600 font-mono text-lg">
              {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes}{" "}
              Mins : {timeLeft.seconds} Secs
            </p>
          </div>

          {/* Color Options */}
          <div className="mb-4">
            <p className="font-semibold mb-1">Color: {color}</p>
            <div className="flex gap-2">
              {["Beige", "Black", "Blue", "White"].map((clr) => (
                <div
                  key={clr}
                  onClick={() => setColor(clr)}
                  className={`h-8 w-8 rounded-full cursor-pointer border ${
                    color === clr ? "ring-2 ring-black" : ""
                  }`}
                  style={{
                    backgroundColor: clr === "Beige" ? "#f5f5dc" : clr,
                  }}
                />
              ))}
            </div>
          </div>                                            
          {/* Size Options */}
          <div className="mb-4">
            <p className="font-semibold mb-1">Size: {size}</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSize(sz)}
                  className={`py-2 px-4 border ${
                    size === sz ? "bg-black text-white" : "border-gray-300"
                  } hover:border-black`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Section */}
          <div className="flex items-center gap-3 mb-5">
            <p className="font-semibold">Quantity:</p>
            <div className="flex items-center border border-gray-300">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increase")}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart and PayPal */}
          <div className="flex flex-col gap-4 mb-4">
            <button className="w-full bg-black text-white py-3 text-center">
              Add to cart - ${quantity * 8.0}
            </button>
            <button className="w-full bg-yellow-500 text-black py-3 text-center">
              Buy with PayPal
            </button>
          </div>

          {/* Extra Options */}
          <div className="flex gap-4 flex-wrap">
            <button className="text-gray-500">Compare color</button>
            <button className="text-gray-500">Ask a question</button>
            <button className="text-gray-500">Delivery & Return</button>
            <button className="text-gray-500">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
