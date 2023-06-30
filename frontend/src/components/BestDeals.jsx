/** @format */
import { productData } from "../static/data";
import styles from "../styles/styles";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
  return (
    <div className={`${styles.section}`}>
      <h1>Best Deals</h1>
      <div className='flex gap-4 px-4 '>
        {data.map((item) => {
          return (
            <div
              className='bg-white w-1/5 h-fit flex flex-col items-center p-4'
              key={item.id}>
              <span className=' flex w-full item '>
                <img
                  src={item.image_Url[0].url}
                  className=' h-28 w-28 '
                  alt={item.image_Url[0].url}
                />
                <div className=' ml-auto w-fit'>
                  <AiOutlineHeart className='text-2xl' />
                  <AiOutlineEye className='text-2xl' />
                  <AiOutlineShoppingCart className='text-2xl' />
                </div>
              </span>

              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>

                <p className='card-text'>{item.price}</p>
                <p className='card-text'>{item.total_sell}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestDeals;
