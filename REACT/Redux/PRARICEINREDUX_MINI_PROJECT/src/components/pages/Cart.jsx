import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { cart_to_wishlist, emty_cart, remove_to_cart } from '../../Store/Action';


const Cart = () => {
  const Cart  = useSelector((state)=>state.cart) 
  console.log('cart' , Cart)
  const dispatch = useDispatch()
  return (
    <>
      <button
        onClick={() => dispatch(emty_cart())}
        className="container px-4 py-2 my-6  bg-red-500 text-white font-medium rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-300"
      >
        Empty Cart
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Cart.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* item Image */}
            <img
              src={item.images}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            {/* Cart Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">${item.price}</p>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button className="flex items-center text-gray-600 hover:text-red-500">
                  onClick={() => dispatch(cart_to_wishlist(product))}
                  <AiOutlineHeart className="mr-2" />
                  Add to Wishlist
                </button>
                <button
                  className="flex items-center text-gray-600 hover:text-green-500"
                  onClick={() => dispatch(remove_to_cart(item))}
                >
                  <AiOutlineShoppingCart className="mr-2" />
                  Remove to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart
