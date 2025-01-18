import React, { useContext, useState } from "react";
import { ProductWisListContext } from "../App";
import { ProductContext } from "../App";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const Products = () => {
  const { Product } = useContext(ProductContext);
  const { wis, setWis } = useContext(ProductWisListContext);

  const Wishlist = (Id) =>   wis.some((item) =>  item.id  === Id);
  

  const Hearts = (pt) => {
    if (Wishlist(pt.id)) {
      //Remove 
      setWis((prev) => prev.filter((item) => item.id !== pt.id));
    } else {
      // Add
      setWis((prev) => [...prev, pt]);
    }
  };



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {Product.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 shadow-md rounded-lg p-4 relative hover:shadow-lg transition-shadow"
        >
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Toggle Wishlist"
            onClick={() => Hearts(product)}
          >
            {Wishlist(product.id) ? (
              <FaHeart size={24} className="text-red-600" />
            ) : (
              <AiOutlineHeart size={24} className="text-gray-600" />
            )}
          </button>

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain mb-4"
          />
          <h2 className="font-bold text-lg text-gray-800 line-clamp-2">
            {product.title}
          </h2>
          <p className="text-gray-600 text-sm mb-2">{product.category}</p>
          <p className="text-gray-700 text-sm line-clamp-3">
            {product.description}
          </p>
          <p className="font-semibold text-xl py-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;

