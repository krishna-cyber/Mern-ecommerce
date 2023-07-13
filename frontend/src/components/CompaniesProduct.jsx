/** @format */

import React from "react";
import styles from "../styles/styles";

const CompaniesProduct = () => {
  return (
    <div
      className={`${styles.section} bg-white px-4 flex justify-between items-center`}>
      <span className=' w-[20%] flex justify-center'>
        <img
          className='max-w-[50%] h-auto object-contain'
          src='https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png'
          alt=''
        />
      </span>
      <span className=' w-[20%]'>
        <img
          className='w-[50%] object-contain'
          src='https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png'
          alt=''
        />
      </span>
      <span className=' w-[20%]'>
        <img
          className='w-[50%] object-contain'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png'
          alt=''
        />
      </span>
      <span className=' w-[20%]'>
        <img
          className='w-[50%] object-contain'
          src='https://www.vectorlogo.zone/logos/apple/apple-ar21.png'
          alt=''
        />
      </span>
      <span className=' w-[20%]'>
        <img
          className='w-[50%] object-contain'
          src='https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg'
          alt=''
        />
      </span>
    </div>
  );
};

export default CompaniesProduct;
