import React, { useContext } from "react";
import { ProductWisListContext } from "../App";

const Wislist = () => {
  const { wis } = useContext(ProductWisListContext);

  return (
    <div>
      <p className="text-center text-4xl font-bold py-7">Wishlist</p>
      {wis.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {wis.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 shadow-md rounded-lg p-4 relative hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h2 className="font-bold text-lg text-gray-800">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{product.category}</p>
              <p className="text-gray-700 text-sm line-clamp-2">
                {product.description}
              </p>
              <p className="font-semibold text-xl py-2">${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-400 text-center">No items in your wishlist.</p>
      )}
    </div>
  );
};

export default Wislist;
