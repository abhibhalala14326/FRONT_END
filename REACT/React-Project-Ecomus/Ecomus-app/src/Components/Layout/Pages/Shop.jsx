import React from 'react'
import ShopTitel from '../../Helping-Components/ShopTitel'
import ShopItem from "../../Helping-Components/ShopItem";
import ShopFilter from "../../Helping-Components/ShopFilter"
import ShopPageButton from "../../Helping-Components/ShopPageButton";
import FooterWhite from "../../Helping-Components/FooterWhite";
import { NextUIProvider } from '@nextui-org/react'
import Product from '../../Helping-Components/Produtct';


const Shop = () => {
  return (
    <>
      <ShopTitel />
      <NextUIProvider>
        <ShopFilter />
      </NextUIProvider>

      <Product />
      <FooterWhite />
    </>
  );
}

export default Shop
