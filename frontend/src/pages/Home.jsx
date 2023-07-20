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

const Home = ({ path }) => {
  return (
    <div>
      <Header />
      {/* SHOW FAQ component when /faq other wise show home */}
      {path && path === "faq" ? (
        <FAQ />
      ) : (
        <>
          {" "}
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
