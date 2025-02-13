import { createContext,useState } from "react";

import React from 'react'
import img1 from "../assets/asset_16.jpeg";
import img2 from "../assets/asset_17.jpeg";
import img3 from "../assets/asset_18.jpeg";
import img4 from "../assets/asset_27.jpeg";
import img5 from "../assets/asset_28.jpeg";
import img6 from "../assets/asset__26.jpeg";
import img7 from "../assets/asset_19.jpeg";
import img8 from "../assets/asset_20.jpeg";
import img9 from "../assets/asset_21.jpeg";
import img10 from "../assets/asset_22.jpeg";
import img11 from "../assets/asset_23.jpeg";
import img12 from "../assets/asset_24.jpeg";
import img13 from "../assets/asset_25.jpeg";
import img14 from "../assets/asset_26.jpeg";
import img15 from "../assets/asset_38.jpeg";
import img16 from "../assets/asset_39.jpeg";
import img17 from "../assets/asset_40.jpeg";
import img18 from "../assets/asset_41.jpeg";
import img19 from "../assets/asset_42.jpeg";
import img20 from "../assets/asset_43.jpeg";
import img21 from "../assets/asset_44.jpeg";

// Define the items array in the parent component
const Products = [
  {
    product_id: 1,
    product_name: "Ribbed Tank Top",
    price: 16.95,
    product_color_image: [
      {
        product_img: img1,
        Color: "white",
      },
      {
        product_img: img3,
        Color: "black",
      },
      {
        product_img: img2,
        Color: "orange",
      },
    ],
    hover_img: img2,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 2,
    product_name: "Ribbel Modal T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img4,
        Color: "Orange",
      },
      {
        product_img: img5,
        Color: "blue",
      },
      {
        product_img: img6,
        Color: "blue",
      },
    ],
    hover_img: img5,
    size: true,
    Sizes: ["M", "L", "XL"],
    Offer: true,
    Time: true,
  },
  {
    product_id: 3,
    product_name: "Oversized Printed T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img7,
        Color: "white",
      },
    ],
    hover_img: img8,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 4,
    product_name: "Oversized Printed T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img9,
        Color: "white",
      },
      {
        product_img: img10,
        Color: "purple",
      },

      {
        product_img: img11,
        Color: "black",
      },
    ],
    hover_img: img10,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 5,
    product_name: "v-neck line T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img12,
        Color: "brown",
      },
      {
        product_img: img14,
        Color: "white",
      },
    ],
    hover_img: img13,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 6,
    product_name: "lose fit Sweatshirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img15,
        Color: "green",
      },
      {
        product_img: img17,
        Color: "black",
      },

      {
        product_img: img18,
        Color: " blue",
      },
      {
        product_img: img20,
        Color: "white",
      },
      {
        product_img: img21,
        Color: "gray",
      },
    ],
    hover_img: img16,
    size: false,
    Offer: false,
    Time: false,
  },

  {
    product_id: 7,
    product_name: "Ribbed Tank Top",
    price: 16.95,
    product_color_image: [
      {
        product_img: img1,
        Color: "white",
      },
      {
        product_img: img3,
        Color: "black",
      },
      {
        product_img: img2,
        Color: "orange",
      },
    ],
    hover_img: img2,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 8,
    product_name: "Ribbel Modal T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img4,
        Color: "Orange",
      },
      {
        product_img: img5,
        Color: "blue",
      },
      {
        product_img: img6,
        Color: "blue",
      },
    ],
    hover_img: img5,
    size: true,
    Sizes: ["M", "L", "XL"],
    Offer: true,
    Time: true,
  },
  {
    product_id: 9,
    product_name: "Oversized Printed T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img7,
        Color: "white",
      },
    ],
    hover_img: img8,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 10,
    product_name: "Oversized Printed T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img9,
        Color: "white",
      },
      {
        product_img: img10,
        Color: "purple",
      },

      {
        product_img: img11,
        Color: "black",
      },
    ],
    hover_img: img10,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 11,
    product_name: "v-neck line T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img12,
        Color: "brown",
      },
      {
        product_img: img14,
        Color: "white",
      },
    ],
    hover_img: img13,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 12,
    product_name: "lose fit Sweatshirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img15,
        Color: "green",
      },
      {
        product_img: img17,
        Color: "black",
      },

      {
        product_img: img18,
        Color: " blue",
      },
      {
        product_img: img20,
        Color: "white",
      },
      {
        product_img: img21,
        Color: "gray",
      },
    ],
    hover_img: img16,
    size: false,
    Offer: false,
    Time: false,
  },
  {
    product_id: 13,
    product_name: "Ribbed Tank Top",
    price: 16.95,
    product_color_image: [
      {
        product_img: img1,
        Color: "white",
      },
      {
        product_img: img3,
        Color: "black",
      },
      {
        product_img: img2,
        Color: "orange",
      },
    ],
    hover_img: img2,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 14,
    product_name: "Ribbel Modal T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img4,
        Color: "Orange",
      },
      {
        product_img: img5,
        Color: "blue",
      },
      {
        product_img: img6,
        Color: "blue",
      },
    ],
    hover_img: img5,
    size: true,
    Sizes: ["M", "L", "XL"],
    Offer: true,
    Time: true,
  },
  {
    product_id: 15,
    product_name: "Oversized Printed T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img7,
        Color: "white",
      },
    ],
    hover_img: img8,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 16,
    product_name: "Oversized Printed T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img9,
        Color: "white",
      },
      {
        product_img: img10,
        Color: "purple",
      },

      {
        product_img: img11,
        Color: "black",
      },
    ],
    hover_img: img10,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 17,
    product_name: "v-neck line T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img12,
        Color: "brown",
      },
      {
        product_img: img14,
        Color: "white",
      },
    ],
    hover_img: img13,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 18,
    product_name: "lose fit Sweatshirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img15,
        Color: "green",
      },
      {
        product_img: img17,
        Color: "black",
      },

      {
        product_img: img18,
        Color: " blue",
      },
      {
        product_img: img20,
        Color: "white",
      },
      {
        product_img: img21,
        Color: "gray",
      },
    ],
    hover_img: img16,
    size: false,
    Offer: false,
    Time: false,
  },
  {
    product_id: 19,
    product_name: "Ribbed Tank Top",
    price: 16.95,
    product_color_image: [
      {
        product_img: img1,
        Color: "white",
      },
      {
        product_img: img3,
        Color: "black",
      },
      {
        product_img: img2,
        Color: "orange",
      },
    ],
    hover_img: img2,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 20,
    product_name: "Ribbel Modal T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img4,
        Color: "Orange",
      },
      {
        product_img: img5,
        Color: "blue",
      },
      {
        product_img: img6,
        Color: "blue",
      },
    ],
    hover_img: img5,
    size: true,
    Sizes: ["M", "L", "XL"],
    Offer: true,
    Time: true,
  },
  {
    product_id: 21,
    product_name: "Oversized Printed T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img7,
        Color: "white",
      },
    ],
    hover_img: img8,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 22,
    product_name: "Oversized Printed T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img9,
        Color: "white",
      },
      {
        product_img: img10,
        Color: "purple",
      },

      {
        product_img: img11,
        Color: "black",
      },
    ],
    hover_img: img10,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 23,
    product_name: "v-neck line T-shirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img12,
        Color: "brown",
      },
      {
        product_img: img14,
        Color: "white",
      },
    ],
    hover_img: img13,
    size: true,
    Sizes: ["L", "XL", "M", "S"],
    Offer: false,
    Time: false,
  },
  {
    product_id: 24,
    product_name: "lose fit Sweatshirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img15,
        Color: "green",
      },
      {
        product_img: img17,
        Color: "black",
      },

      {
        product_img: img18,
        Color: " blue",
      },
      {
        product_img: img20,
        Color: "white",
      },
      {
        product_img: img21,
        Color: "gray",
      },
    ],
    hover_img: img16,
    size: false,
    Offer: false,
    Time: false,
  },
  {
    product_id: 25,
    product_name: "lose fit Sweatshirt",
    price: 16.95,
    product_color_image: [
      {
        product_img: img15,
        Color: "green",
      },
      {
        product_img: img17,
        Color: "black",
      },

      {
        product_img: img18,
        Color: " blue",
      },
      {
        product_img: img20,
        Color: "white",
      },
      {
        product_img: img21,
        Color: "gray",
      },
    ],
    hover_img: img16,
    size: false,
    Offer: false,
    Time: false,
  },
];

export const ContextProducts = createContext();

const CreateContextProduct = ({ children }) => {

const [ProductsItems, setProductsItems] = useState(Products);

console.log('ProductsItems' , ProductsItems);

// const productData = useMemo(() => ProductsItems, []);

  return (
    <div>
      <ContextProducts.Provider value={{ProductsItems}}>
        {children}
      </ContextProducts.Provider>
    </div>
  );
};

export default CreateContextProduct


