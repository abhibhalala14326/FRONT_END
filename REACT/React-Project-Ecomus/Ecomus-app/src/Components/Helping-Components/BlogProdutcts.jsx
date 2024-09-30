import React from "react";
import img from "../../assets/electronic-Post-img-1.jpg";
import { MdArrowOutward } from "react-icons/md";

const BlogProducts = () => {
  // Array of blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Pop-punk is back in fashion",
      category: "Accessories",
      imgSrc: img,
      link: "/blog/1",
    },
    {
      id: 2,
      title: "Pop-punk is back in fashion",
      category: "Accessories",
      imgSrc: img,
      link: "/blog/2",
    },
    {
      id: 3,
      title: "Pop-punk is back in fashion",
      category: "Accessories",
      imgSrc: img,
      link: "/blog/3",
    },
    {
      id: 4,
      title: "Pop-punk is back in fashion",
      category: "Accessories",
      imgSrc: img,
      link: "/blog/3",
    },
    {
      id: 5,
      title: "Pop-punk is back in fashion",
      category: "Accessories",
      imgSrc: img,
      link: "/blog/3",
    },
  ];

  return (
    <main className="grid lg:grid-cols-3 sm:grid-cols-2 px-5 gap-x-5 mb-5">
      {blogPosts.map((post) => (
        <div key={post.id} className="mb-10 flex flex-col w-full overflow-hidden gap-4">
          <div className="w-fit relative overflow-hidden">
            <img
              src={post.imgSrc}
              alt={post.title}
              className="h-full w-full object-cover hover:scale-110 duration-1000 object-center"
            />
            <button className="absolute bottom-4 left-5 bg-white px-3 py-1 rounded-md">
              {post.category}
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
