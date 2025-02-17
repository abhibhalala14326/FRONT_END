import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {  emty_wishlist, remove_to_wishlist, wishlit_to_cart } from '../../Store/Action';

const Wishlist = () => {

  const WishlistData = useSelector((state)=>state.wish)
  console.log('wish page data => ', WishlistData);
  const dispatch = useDispatch();
  

  return (
    <div>
      <button
        onClick={() => dispatch(emty_wishlist())}
        className="container px-4 py-2 my-6  bg-red-500 text-white font-medium rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-300"
      >
        Empty Wishlist
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {WishlistData.flat().map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={product.images}
              alt={product.title}
              className="w-full h-52 object-cover"
            />

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-600">${product.price}</p>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button
                  className="flex items-center text-gray-600 hover:text-red-500"
                  onClick={() => dispatch(remove_to_wishlist(product))}
                >
                  <AiOutlineHeart className="mr-2" />
                  Remove to Wishlist
                </button>
                <button
                  className="flex items-center text-gray-600 hover:text-green-500"
                  onClick={() => dispatch(wishlit_to_cart(product))}
                >
                  <AiOutlineShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist
