import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { product_set } from "../../Store/ProductAction";
import { add_to_cart , add_to_wishlist } from "../../Store/Action";
import productData from "../../Store/data.json";

const Shop = () => {
  const ProductData = useSelector((state) => state.product);
  const ProductCart = useSelector((state) => state.cart);
  const Productwish = useSelector((state) => state.wishlist);

  useEffect(()=>
  {
dispatch(product_set(productData))
  } , [])
  const dispatch = useDispatch();

  console.log("product ", ProductData);
  

  

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProductData.flat().map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 border rounded p-4 shadow-md"
          >
            <img src={item.image} alt="" className="w-full " />
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p>Color: {item.color}</p>
            <p>Price: ₹{item.price}</p>
            <button
              className="bg-green-500 text-white px-3 py-1 mt-2 rounded"
              onClick={() => dispatch(add_to_cart(item))}
            >
              Add to Cart
            </button>

            <button
              className="bg-green-500 text-white px-3 py-1 mt-2 rounded"
              onClick={() => dispatch(add_to_wishlist(item))}
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
