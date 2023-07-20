/** @format */

import React from "react";
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
// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import Categories from "../components/Categories";
// import BestDeals from "../components/BestDeals";
// import FeatureProduct from "../components/FeatureProduct.jsx";
// import EventSection from "../components/EventSection";
// import CompaniesProduct from "../components/CompaniesProduct";
// import Footer from "../components/Footer";
// import FAQ from "../components/FAQ";

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
      <Footer />
      {/* <FAQ /> */}
    </div>
  );
};

export default Home;
