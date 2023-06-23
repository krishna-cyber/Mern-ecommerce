/** @format */

import React from "react";
import styles from "../styles/styles";
import categoryData from "../static/data.js";

const Categories = () => {
  return (
    <>
      <div className={`${styles.section}`}>
        <div className=' flex justify-between items-center'>
          <h2>Categories</h2>
          <div className=' bg-[smoke]'></div>
        </div>
      </div>
    </>
  );
};

export default Categories;
