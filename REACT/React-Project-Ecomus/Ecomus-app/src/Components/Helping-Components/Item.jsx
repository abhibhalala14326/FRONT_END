import React from "react";
import img from "../../assets/electronic_6.jpg";

const Item = ({img , title , titletwo}) => {
  return (
    <div className="flex flex-col items-center p-1 py-4 h-[50] w-[90%] bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={img}
          alt="Electronic item"
          className="w-full h-auto rounded-md"
        />
        <h2 className="font-semibold text-black text-sm mt-4  uppercase">
          {titletwo}
        </h2>
        <p className="font-semibold text-lg sm:text-4xl mx-sm:text-xl capitalize mt-2">
          {title}
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Item;
