import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart, add_to_wishlist, product_set } from "../../Store/Action";
import productData from "../../Store/data.json";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Shop = () => {

  const dispatch = useDispatch();
  
  const ProductData = useSelector((state) => state.product);
  const productcart = useSelector((state) => state.cart)
  const productWishlist = useSelector((state) => state.wishlist);
  

  useEffect(() => {
    dispatch(product_set(productData));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProductData.flat().map((product,index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover"
            />

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price}</p>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button className="flex items-center text-gray-600 hover:text-red-500" onClick={()=>dispatch(add_to_wishlist(product))}>
                  <AiOutlineHeart className="mr-2" />
                  Add to Wishlist
                </button>
                <button
                  className="flex items-center text-gray-600 hover:text-green-500"
                  onClick={() => dispatch(add_to_cart(product))} // Dispatch the action to update cart state
                >
                  <AiOutlineShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
