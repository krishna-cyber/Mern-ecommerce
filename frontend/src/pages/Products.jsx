/** @format */

import React, { useEffect, useState } from "react";
import { Header, Footer } from "../Routes/route.js";
import ProductCard from "../components/ProductCard.jsx";
import { categoryData, productData } from "../static/data.js";
import styles from "../styles/styles.js";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Header />
      {productData && productData.length > 0 ? (
        <div className={`${styles.section}  mt-4 mx-auto`}>
          <h1 className=' font-semibold text-xl my-4'>All Products</h1>
          <div className=' flex gap-4  flex-wrap justify-between w-full'>
            {productData.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      ) : null}
      {productData && productData.length == 0 ? (
        <div className=' flex justify-center items-center h-screen w-full'>
          <h1 className='text-2xl font-semibold'>‼️No Products Found‼️</h1>
        </div>
      ) : null}

      <Footer />
    </>
  );
};

export default Products;
