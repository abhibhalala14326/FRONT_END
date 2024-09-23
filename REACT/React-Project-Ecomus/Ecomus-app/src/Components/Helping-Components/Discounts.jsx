import React from 'react'
import styles from "../../css/Discounts.module.css";

const Discounts = () => {
  return (
    <>
      <div className="flex justify-evenly items-center h-[100vh] ">
        <div className={styles.discounts}>
          <div className=" h-full flex ml-14 items-center text-white">
            <div>
              <p className="text-[14px] font-bold max-[450px]:text-[12px]">
                SALE UP TO 30% OFF TODAY
              </p>
              <h1 className="sm:text-[42px] text-[35px] max-[450px]:text-[22px] text-nowrap font-bold">
                Best Deals Discounts
              </h1>
              <p className="text-xl">Fast wireless charging on-the-go.</p>
              <button className={styles.btnShine}>
                <span>Shop Collection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discounts
