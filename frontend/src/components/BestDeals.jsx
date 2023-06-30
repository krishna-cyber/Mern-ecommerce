/** @format */
import { productData } from "../static/data";
import styles from "../styles/styles";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
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
    <div className={`${styles.section}  mt-4`}>
      <h1 className=' font-semibold text-xl my-4'>Best Deals</h1>
      <div className='flex gap-4 '>
        {data.map((item) => {
          return (
            <div
              className='bg-white w-1/5 flex flex-col items-center p-4 rounded-md shadow-md'
              key={item.id}>
              <span className=' flex w-[70%]'>
                <img
                  src={item.image_Url[0].url}
                  className=' w-36 h-36'
                  alt={item.image_Url[0].url}
                />
                <div className=' ml-auto w-fit flex flex-col gap-3'>
                  <AiOutlineHeart className='text-2xl cursor-pointer' />
                  <AiOutlineEye className='text-2xl cursor-pointer' />
                  <AiOutlineShoppingCart className='text-2xl cursor-pointer' />
                </div>
              </span>

              <div className='card-body'>
                <p className=' text-blue-500 pt-4 cursor-pointer'>
                  {item.shop.name}
                </p>
                <h5 className=' font-medium text-lg'>
                  {item.name.length > 40
                    ? item.name.slice(0, 40) + "..."
                    : item.name}
                </h5>
                <span>
                  {item.rating > 0 ? (
                    //according to rating show star
                    item.rating === 1 ? (
                      <>
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiOutlineStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiOutlineStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiOutlineStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiOutlineStar className=' text-yellow-500 text-xl inline-block ml-2' />
                      </>
                    ) : item.rating === 2 ? (
                      <>
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiOutlineStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiOutlineStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiOutlineStar className=' text-yellow-500 text-xl inline-block ml-2' />
                      </>
                    ) : item.rating === 3 ? (
                      <>
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiOutlineStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiOutlineStar className=' text-yellow-500 text-xl inline-block ml-2' />
                      </>
                    ) : item.rating === 4 ? (
                      <>
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiOutlineStar className=' text-yellow-500 text-xl inline-block ml-2' />
                      </>
                    ) : item.rating === 5 ? (
                      <>
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2 ' />
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                        <AiFillStar className=' text-yellow-500 text-xl inline-block ml-2' />
                      </>
                    ) : (
                      <AiOutlineStar />
                    )
                  ) : (
                    <AiOutlineStar />
                  )}
                </span>
                <span className=' flex justify-between'>
                  <p className=' font-medium text-lg'>{item.price}$</p>
                  <p className=' text-green-500'>{item.total_sell} Sold</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestDeals;
