/** @format */
import { productData } from "../static/data";

import React, { useEffect, useState } from "react";

const BestDeals = () => {
  useEffect(() => {
    //sort from product data having highest sell 5 items in descending order

    const sortedData = productData.sort((a, b) => {
      return b.total_sell - a.total_sell;
    });
    //slice the first 5 items
    const slicedData = sortedData.slice(0, 5);
    setData(slicedData);
  }, []);
  const [data, setData] = useState([]);
  return <div>BestDeals</div>;
};

export default BestDeals;
