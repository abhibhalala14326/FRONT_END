import React from 'react'
import ProductDetails from '../../Helping-Components/ProductDetails';
import ProductPage from '../../Helping-Components/ProductPages';
import Product from '../../Helping-Components/Produtct';
import ProductSlider from '../../Helping-Components/ProductSlider';
import img1 from "../../../assets/asset_16.jpeg";
import img2 from "../../../assets/asset_17.jpeg";
import img3 from "../../../assets/white-4.jpg";


const items44 = [
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

const Products = () => {
  return (
    <div className='flex flex-col gap-4'>
      <ProductPage/>
     <ProductDetails/>
     <ProductSlider items={items44}/>
    </div>
  );
};

export default Products;
