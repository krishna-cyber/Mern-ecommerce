/** @format */

import React, { useEffect, useState } from "react";
import { Header, Footer } from "../Routes/route.js";
import ProductCard from "../components/ProductCard.jsx";
import { productData } from "../static/data.js";
import styles from "../styles/styles.js";

const Products = () => {
  return (
    <>
      <Header />
      {productData && (
        <div className={`${styles.section}  mt-4 mx-auto`}>
          <h1 className=' font-semibold text-xl my-4'>All Products</h1>
          <div className=' flex gap-4  flex-wrap justify-between w-full'>
            {productData.map((item) => {
              return <ProductCard item={item} />;
            })}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Products;
