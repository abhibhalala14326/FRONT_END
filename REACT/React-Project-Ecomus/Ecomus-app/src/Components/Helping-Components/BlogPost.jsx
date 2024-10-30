import React from "react";
import { MdArrowOutward } from "react-icons/md";
import img from "../../assets/electronic-Post-img-1.jpg";

const BlogPost = ({img , title , titletwo }) => {
  return (
    <div className="mb-10 flex flex-col gap-4">
      <div className=" w-[90%] relative mx-auto overflow-hidden">
        <img
          src={img}
          alt="Pop-punk fashion accessories"
          className="h-full w-full object-cover object-center rounded-md duration-1000 hover:scale-105"
        />
        <button className="absolute bottom-4 left-5 bg-white px-3 py-1 rounded-md text-gray-800 font-medium">
          Accessorise
        </button>
      </div>

      <a
        href="#"
        className="text-xl capitalize ml-5 font-medium hover:text-[#66FF00]"
      >
        {title}
      </a>

      <a
        href="#"
        className="flex items-center gap-2 pb-2 ml-5 relative capitalize w-[120px] text-gray-600 hover:text-black"
      >
        <p className="text-[14px]">Read more</p>
        <MdArrowOutward className="text-[16px]" />
        <span className="h-[1px] bg-black w-full absolute bottom-0"></span>
      </a>
    </div>
  );
};

export default BlogPost;
