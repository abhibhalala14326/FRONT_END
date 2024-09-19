import React from 'react'
import styles from "../../css/Item.module.css";
import img from "../../assets/electronic-6.jpg";
const Item = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className=" font-[600] text-[#0a070760]">True Earbuds</h2>
          <p className=" title font-[600] text-[18px] sm:text-2xl capitalize">
            smart assistant
          </p>
          <button className='btn1'>Shop now</button>
        </div>
      </div>
    </>
  );
}

export default Item
