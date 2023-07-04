/** @format */

import React from "react";
import styles from "../styles/styles";
import { categoryData } from "../static/data.js";
import Branding from "./Branding";
import { useNavigate, createSearchParams } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const handleClick = (category) => (e) => {
    e.preventDefault();
    navigate({
      pathname: "/products",
      search: `?categories=${createSearchParams(category.name)}`,
    });
  };
  return (
    <>
      <Branding />
      <div className={`${styles.section} `}>
        <div className='bg-white flex flex-wrap items-center'>
          {categoryData &&
            categoryData.map((category) => {
              return (
                <>
                  {" "}
                  <div className=' w-[25%]  p-2 px-8c'>
                    <span
                      className='flex items-center justify-center w-fit cursor-pointer'
                      onClick={handleClick(category)}>
                      {" "}
                      <img
                        className=' w-14 h-14'
                        src={category.image_Url}
                        alt=''
                      />
                      <p className=' font-semibold text-lg'>{category.name}</p>
                    </span>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
