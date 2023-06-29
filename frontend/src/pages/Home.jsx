/** @format */

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestDeals from "../components/BestDeals";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  );
};

export default Home;
