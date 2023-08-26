/** @format */

import React, { useEffect, useState } from "react";
import { productData } from "../static/data.js";
import styles from "../styles/styles.js";
import ProductCard from "../components/ProductCard.jsx";
import {
  Header,
  Hero,
  Branding,
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

      <>
        <Hero />
        <Branding />
        <BestDeals />
        <EventSection />
        <FeatureProduct />
        <CompaniesProduct />
      </>
      <Footer />
    </div>
  );
};

export default Home;
