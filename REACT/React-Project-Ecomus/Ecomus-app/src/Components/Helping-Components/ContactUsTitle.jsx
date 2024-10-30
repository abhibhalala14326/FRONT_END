import img1 from "../../assets/page-title-blog.png";
import React from "react";

const ContactUsTitle = () => {
  return (
    <div>
      <div
        className="flex  flex-col justify-center items-center h-[40vh]"
        style={{ background: `url(${img1})`, backgroundSize: "cover" }}
      >
        <p className="sm:text-5xl text-2xl">Contact Us</p>
        
      </div>
    </div>
  );
}

export default ContactUsTitle
