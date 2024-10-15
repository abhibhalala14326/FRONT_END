import React from "react";
import ShopItem from "./ShopItem";
import img1 from "../../assets/white-1.jpg";
import img2 from "../../assets/asset_15.jpeg";
import img3 from "../../assets/white-4.jpg";

// Define the items array in the parent component
const items = [
  {
    product_id: 1,
    product_name: "Ribbed Tank Top",
    price: 16.95,
    product_color_image: [
      {
        product_img: img1,
        Color: "Orange",
      },
      {
        product_img: img2,
        Color: "blue",
      },
    ],
    hover_img: img3,
    size: false,
    Sizes: ["L", "XL", "M"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 1,
    product_name: "Ribbed Tank Top",
    price: 16.95,
    product_color_image: [
      {
        product_img: img1,
        Color: "Orange",
      },
      {
        product_img: img2,
        Color: "blue",
      },
    ],
    hover_img: img3,
    size: false,
    Sizes: ["L", "XL", "M"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 1,
    product_name: "Ribbed Tank Top",
    price: 16.95,
    product_color_image: [
      {
        product_img: img1,
        Color: "Orange",
      },
      {
        product_img: img2,
        Color: "blue",
      },
    ],
    hover_img: img3,
    size: false,
    Sizes: ["L", "XL", "M"],
    Offer: false,
    Time: false,
  },
  // Additional products...
];

const Product = () => {
  return <ShopItem items={items} />;
};

export default Product;
