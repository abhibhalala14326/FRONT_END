import React from 'react'
import ShopTitel from '../Helping-Components/ShopTitel'
import ShopItem from '../Helping-Components/ShopItem'
import ShopFilter from '../Helping-Components/ShopFilter'
import ShopPageButton from '../Helping-Components/ShopPageButton'
import FooterWhite from '../Helping-Components/FooterWhite'


const Shop = () => {
  return (
    <>
      <ShopTitel />
      <ShopFilter />

      <ShopItem />
      <ShopPageButton/>
      <FooterWhite/>
    </>
  );
}

export default Shop
