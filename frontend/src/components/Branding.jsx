/** @format */

import React from "react";
import styles from "../styles/styles";
import { IoRefreshOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineTrophy } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";

const Branding = () => {
  return (
    <>
      <div className={styles.section}>
        <div className=' min-w-[90%] bg-white mx-auto rounded-md p-3  flex justify-between items-center'>
          <div className=' gap-2 flex items-center'>
            <AiOutlineShoppingCart className=' inline-block text-orange-500 text-4xl' />
            <span className='description'>
              <h3 className=' font-semibold text-xl'>Free Shipping</h3>
              <p className=' text-md'>From all orders over 100$.</p>
            </span>
          </div>
          <div className=' gap-2 flex items-center'>
            <IoRefreshOutline className=' inline-block text-orange-500 text-4xl' />
            <span className='description'>
              <h3 className=' font-semibold text-xl'>Daily Surprise Offers</h3>
              <p className=' text-md'>Save up to 25% off</p>
            </span>
          </div>{" "}
          <div className=' gap-2 flex items-center'>
            <AiOutlineTrophy className=' inline-block text-orange-500 text-4xl' />
            <span className='description'>
              <h3 className=' font-semibold text-xl'>Affortable Prices</h3>
              <p className=' text-md'>Get Factory direct price.</p>
            </span>
          </div>{" "}
          <div className=' gap-2 flex items-center'>
            <RiSecurePaymentLine className=' inline-block text-orange-500 text-4xl' />
            <span className='description'>
              <h3 className=' font-semibold text-xl'>Secure Payments</h3>
              <p className=' text-md'>100% protected payments.</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branding;
