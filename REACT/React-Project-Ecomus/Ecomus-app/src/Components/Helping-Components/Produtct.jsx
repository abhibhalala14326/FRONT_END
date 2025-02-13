import React, { useContext } from "react";
import ShopItem from "./ShopItem";
// import { ContextProducts } from "../../context/CreateContextProduct";
import { ContextProducts } from "../../context/createContextProduct";




const Product = () => {
const  {ProductsItems}  = useContext(ContextProducts);
console.log(ProductsItems);


  return <ShopItem items={ProductsItems} />
};

export default Product;
