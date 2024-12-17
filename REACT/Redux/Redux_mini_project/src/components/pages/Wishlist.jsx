import React from "react";
import { remove_to_wishlist } from "../../Store/Action";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.carttowishlist);
  const cartowishdata = useSelector((state)=>state.Wishlist)

  console.log("cart to wish",cartowishdata);
  
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {wishlistData.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty!</p>
        ) : (
          wishlistData.map((item) => (
            <div>
              <ul
                key={item.id}
                className="bg-gray-500 border-2 rounded-md p-4 mb-2"
              >
                <li className="text-white">{item.name}</li>
                <li className="text-gray-200">{item.color}</li>
                <li className="text-yellow-300 font-bold">{item.price}</li>
              </ul>

              <button onClick={() => dispatch(remove_to_wishlist(item))}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div>
        {cartowishdata.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty!</p>
        ) : (
          cartowishdata.map((item) => (
            <div>
              <ul
                key={item.id}
                className="bg-gray-500 border-2 rounded-md p-4 mb-2"
              >
                <li className="text-white">{item.name}</li>
                <li className="text-gray-200">{item.color}</li>
                <li className="text-yellow-300 font-bold">{item.price}</li>
              </ul>

              <button onClick={() => dispatch(remove_to_wishlist(item))}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
