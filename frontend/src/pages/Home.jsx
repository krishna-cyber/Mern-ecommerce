/** @format */

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestDeals from "../components/BestDeals";
import FeatureProduct from "../components/FeatureProduct.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <BestDeals />
      <FeatureProduct />
    </div>
  );
};

export default Home;
