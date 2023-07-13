/** @format */

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestDeals from "../components/BestDeals";
import FeatureProduct from "../components/FeatureProduct.jsx";
import EventSection from "../components/EventSection";
import CompaniesProduct from "../components/CompaniesProduct";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <BestDeals />
      <EventSection />
      <FeatureProduct />
      <CompaniesProduct />
    </div>
  );
};

export default Home;
