/** @format */

import React, { useEffect, useState } from "react";
import { Header, Footer } from "../Routes/route.js";
import ProductCard from "../components/ProductCard.jsx";
import { productData } from "../static/data.js";
import styles from "../styles/styles.js";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData == null) {
      const d =
        productData &&
        productData.sort((a, b) => {
          a.total_sell - b.total_sell;
        });
      console.log(categoryData);
      setData(productData);
    } else {
      const d = productData.filter((item) => {
        return item.category == categoryData;
      });
      console.log(d);
      setData(d);
      console.log(categoryData);
    }
  }, [categoryData]);
  return (
    <>
      <Header />
      {data && data.length > 0 ? (
        <div className={`${styles.section}  mt-4 mx-auto`}>
          <h1 className=' font-semibold text-xl my-4'>All Products</h1>
          <div className=' flex gap-4  flex-wrap justify-between w-full'>
            {data.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      ) : null}
      {data && data.length == 0 ? (
        <div className=' flex justify-center items-center h-screen w-full'>
          <h1 className='text-2xl font-semibold'>‼️No Products Found‼️</h1>
        </div>
      ) : null}

      <Footer />
    </>
  );
};

export default Products;
