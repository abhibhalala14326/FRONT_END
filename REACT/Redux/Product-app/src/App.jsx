import { createContext, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Products from './Components/Products'
import Wislist from './Components/Wislist'
import Layout from './Components/Layout'


 



export const ProductContext = createContext()
export const ProductWisListContext = createContext();

function App() {

  const [Product , setProduct] = useState([])
  const [wis, setWis] = useState([]);

useEffect(() => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
     console.log(res.data);
     setProduct(res.data)
     
      
    } );
}, []);

  return (
    <>
      <ProductContext.Provider value={{ Product, setProduct }}>
        <ProductWisListContext.Provider value={{ wis, setWis }}>
          <Layout />
        </ProductWisListContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

export default App
