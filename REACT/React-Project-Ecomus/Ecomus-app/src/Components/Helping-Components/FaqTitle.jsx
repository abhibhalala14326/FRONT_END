import React from 'react'
import img1 from "../../assets/page-title-blog.png";


const FaqTitle = () => {
  return (
    <div>
      <div
        className="flex  flex-col justify-center items-center h-[40vh]"
        style={{ background: `url(${img1})`, backgroundSize: "cover" }}
      >
        <p className="sm:text-5xl text-2xl">FAQ 01</p>
      </div>
    </div>
  );
}

export default FaqTitle
