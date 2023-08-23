/** @format */

import React, { useEffect, useState } from "react";
import { productData } from "../static/data.js";
import styles from "../styles/styles.js";
import ProductCard from "../components/ProductCard.jsx";
import {
  Header,
  Hero,
  Categories,
  BestDeals,
  FeatureProduct,
  EventSection,
  CompaniesProduct,
  Footer,
  FAQ,
} from "../Routes/route.js";
import { set } from "react-hook-form";

const Home = ({ path }) => {
  return (
    <div>
      <Header />
      {/* SHOW FAQ component when /faq other wise show home */}
      {path && path === "faq" ? (
        <FAQ />
      ) : path === "products" ? (
        productData && (
          <div className={`${styles.section}  mt-4 mx-auto`}>
            <h1 className=' font-semibold text-xl my-4'>All Products</h1>
            <div className=' flex gap-4  flex-wrap justify-between w-full'>
              {productData.map((item) => {
                return <ProductCard item={item} />;
              })}
            </div>
          </div>
        )
      ) : (
        <>
          {/* {" "}condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4; */}
          <Hero />
          <Categories />
          <BestDeals />
          <EventSection />
          <FeatureProduct />
          <CompaniesProduct />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
