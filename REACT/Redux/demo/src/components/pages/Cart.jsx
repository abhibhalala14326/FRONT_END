import React from 'react'
import { useSelector } from 'react-redux';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";


const Cart = () => {
  const Cart  = useSelector((state)=>state.cart) 
  console.log('cart' , Cart)
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    
      {Cart.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {/* item Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-52 object-cover"
          />

          {/* Cart Details */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.name}
            </h3>
            <p className="text-gray-600">${item.price}</p>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-4">
              <button className="flex items-center text-gray-600 hover:text-red-500">
                <AiOutlineHeart className="mr-2" />
                Add to Wishlist
              </button>
              <button
                className="flex items-center text-gray-600 hover:text-green-500"
              >
                <AiOutlineShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart
