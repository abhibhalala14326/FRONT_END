import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import bgimg from "../../assets/page-title-blog.png";


const BlogTitle = ({ Title1, Title2 }) => {
  return (
    <div>
      <div
        className="text-center innerBannerSection py-12 md:py-16 mb-4 "
        style={{
          backgroundImage:
            "linear-gradient(90deg, #ffffff00, #ffb9b942, #ffffff00)",
        }}
      >
        <h1 className="text-4xl md:text-5xl mb-5 tracking-wide capitalize">
          {Title1}
        </h1>
        <p className="text-sm md:text-base flex items-center justify-center capitalize">
          <NavLink to="/">Home</NavLink>
          <MdKeyboardArrowRight className="mx-5" />
          {Title2}
        </p>
      </div>
    </div>
  );
};

export default BlogTitle;
