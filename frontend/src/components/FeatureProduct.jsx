/** @format */

import React from "react";
import ProductCard from "./ProductCard";
import { productData } from "../static/data";
import styles from "../styles/styles";

const FeatureProduct = () => {
  return (
    <div className={`${styles.section}  mt-4 mx-auto`}>
      <h1 className=' font-semibold text-xl my-4'>Featured Products</h1>
      <div className=' flex gap-4  flex-wrap justify-between w-full'>
        {productData.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProduct;
