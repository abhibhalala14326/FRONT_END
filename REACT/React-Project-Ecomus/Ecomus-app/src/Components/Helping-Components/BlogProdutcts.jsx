import React from "react";
import img from "../../assets/electronic-Post-img-1.jpg";    
import img1 from "../../assets/blog-2.jpg";
import img2  from "../../assets/blog-3.jpg";
import img3 from "../../assets/blog-4.jpg";
import img4 from "../../assets/blog-5.jpg";
import img5 from "../../assets/blog-6.jpg";
import img6 from "../../assets/blog-7.jpg";
import img7 from "../../assets/blog-8.jpg";
import img8 from "../../assets/blog-9.jpg";
import { MdArrowOutward } from "react-icons/md";

const BlogProducts = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The next generation of leather alternatives",
      btn: "Accessories",
      imgSrc: img1,
      link: "/blog/1",
    },
    {
      id: 2,
      title: "An Exclusive Clothing Collaboration",
      btn: "Accessories",
      imgSrc: img2,
      link: "/blog/2",
    },
    {
      id: 3,
      title: "Hello Fashion by Colombian-American",
      btn: "Accessories",
      imgSrc: img3,
      link: "/blog/3",
    },
    {
      id: 4,
      title: "Christine Is A True Style Icon",
      btn: "Accessories",
      imgSrc: img4,
      link: "/blog/3",
    },
    {
      id: 5,
      title: "Effortlessly Blends The Carefree Style",
      btn: "design",
      imgSrc: img5,
      link: "/blog/3",
    },
    {
      id: 6,
      title: "The Variety Of Styles And Prices Are Endless",
      btn: "Accessories",
      imgSrc: img6,
      link: "/blog/3",
    },
    {
      id: 7,
      title: "Something About This Style Of Jeans",
      btn: "design",
      imgSrc: img7,
      link: "/blog/3",
    },
    {
      id: 8,
      title: "One Of The Most Iconic Fashion Bloggers",
      btn: "tech",
      imgSrc: img8,
      link: "/blog/3",
    },
  ];

  return (
    <main className="grid lg:grid-cols-3 sm:grid-cols-2 md:px-5 gap-x-5 mb-5 w-full">
      {blogPosts.map((post) => (
        <div key={post.id} className="mb-10 flex flex-col w-full  gap-4">
          <div className="w-fit relative overflow-hidden">
            <img
              src={post.imgSrc}
              alt={post.title}
              className="h-full w-full  hover:scale-110 duration-1000 object-center"
            />
            <button className="absolute bottom-4 left-5 bg-white px-3 uppercase py-1 rounded-md">
              {post.btn}
            </button>
          </div>
          <a href={post.link} className="text-xl capitalize ml-5">
            {post.title}
          </a>
          <a
            href={post.link}
            className="flex justify-center items-center gap-2 pb-2 ml-5 relative capitalize w-[100px]"
          >
            <p className="text-[14px]">read more</p>
            <MdArrowOutward className="text-[14px]" />
            <p className="h-[1px] bg-black w-full absolute bottom-0"></p>
          </a>
        </div>
      ))}
    </main>
  );
};

export default BlogProducts;
