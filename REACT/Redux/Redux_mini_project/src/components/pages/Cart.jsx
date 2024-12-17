import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cart_to_wishlist,
  remove_to_cart,
  empty_cart,
} from "../../Store/Action";

const Cart = () => {
  const CartData = useSelector((state) => state.cart);
  const wishlistData = useSelector((state) => state.carttowishlist);
  const dispatch = useDispatch();

  console.log("cart to wishlist", wishlistData);
  console.log("cartdata", CartData);

  return (
    <div className="p-4">
      <button
        className="bg-red-500 text-white px-3 py-2 rounded"
        onClick={() => dispatch(empty_cart())}
      >
        Empty Cart
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {CartData.length === 0 ? (
          <p className="text-center text-gray-500 col-span-3">
            Your cart is empty!
          </p>
        ) : (
          CartData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 border rounded p-4 shadow-md flex flex-col justify-between"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover mb-3"
              />
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p>Color: {item.color}</p>
              <p>Price: ₹{item.price}</p>
              <div className="mt-4 flex justify-between">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded"
                  onClick={() => dispatch(cart_to_wishlist(item))}
                >
                  Move to Wishlist
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => dispatch(remove_to_cart(item))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
