import React, { useEffect, useRef } from "react";
import img from "../assets/img1.jpg";
import img1 from "../assets/img2.webp";
import img2 from "../assets/img3.jpg";

function ScrollingImg() {
  const imgRef = useRef(null);

  const imgesShow = (Img) => {
      imgRef.current.src = Img;
      imgRef.classList.add("animate-slide-in");
  };



  return (
    <div className="flex flex-col items-center space-y-4 ">
      <div className="h-[400px] overflow-hidden bg-gray-200 rounded-lg">
        <img
          ref={imgRef}
          src={img}
          alt="Selected"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => imgesShow(img)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Image 1
        </button>
        <button
          onClick={() => imgesShow(img1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg  hover:bg-green-600"
        >
          Image 2
        </button>
        <button
          onClick={() => imgesShow(img2)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Image 3
        </button>
      </div>
    </div>
  );
}

export default ScrollingImg;
