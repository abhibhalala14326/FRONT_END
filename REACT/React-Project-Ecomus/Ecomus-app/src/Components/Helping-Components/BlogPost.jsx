import React from "react";
import { MdArrowOutward } from "react-icons/md";
import img from "../../assets/electronic-Post-img-1.jpg";

const BlogPost = () => {
  return (
    <>
      <div className="mb-10 flex flex-col gap-4">
        <div className="h-[500px] w-[90%] relative">
          <img
            src={img}
            alt=""
            className="h-full w-full object-cover object-center "
          />
          <button className="absolute bottom-4 left-5 bg-white px-3 py-1 rounded-md">
            Accessories
          </button>
        </div>
        <a href="" className="text-xl capitalize ml-5">
          pop-punk is back in fashi0n
        </a>

        <a
          href=""
          className="flex justify-center items-center gap-2 pb-2 ml-5 relative capitalize w-[100px]"
        >
          <p className="text-[14px]">read more</p>
          <MdArrowOutward className="text-[14px]" />
          <p className="h-[1px] bg-black w-full absolute bottom-0"></p>
        </a>
      </div>
    </>
  );
};

export default BlogPost;
