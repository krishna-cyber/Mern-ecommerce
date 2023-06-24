/** @format */

import React from "react";
import styles from "../styles/styles";
import { categoryData } from "../static/data.js";
import Branding from "./Branding";

const Categories = () => {
  return (
    <>
      <Branding />
      <div className={`${styles.section}`}>
        <div className='bg-white flex flex-wrap items-center'>
          {categoryData &&
            categoryData.map((category) => {
              return (
                <>
                  <div className='flex items-center  p-2 w-[25%]'>
                    <img
                      className=' w-14 h-14'
                      src={category.image_Url}
                      alt=''
                    />
                    <p className=' font-semibold text-lg'>{category.name}</p>
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
