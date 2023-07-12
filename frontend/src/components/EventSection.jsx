/** @format */

import React from "react";
import styles from "../styles/styles";
import { AiOutlineArrowRight } from "react-icons/ai";
const EventSection = () => {
  return (
    <div className={styles.section}>
      <h3 className=' font-semibold text-xl my-4'>Popular Events</h3>
      <div className='w-full bg-white p-4'>
        <div className=' flex justify-between'>
          <img
            className=' w-full m-auto  lg:w-[40%] object-cover rounded-md'
            src='https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg'
            alt=''
          />
          <div className=' p-12 w-full my-auto text-lg flex flex-col gap-4 mx-auto'>
            <h3 className=' font-semibold text-2xl '>
              Iphone 14 pro max 256GB
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, debitis! Deserunt temporibus cumque assumenda, unde
              obcaecati, iusto doloremque repellendus quod et esse quisquam
              voluptatibus! Quidem quo illum neque illo tenetur!
            </p>
            <span className=' w-full'>
              <span className=' line-through text-red-600 text-xl font-semibold'>
                1099
              </span>
              <span className='font-bold w-[80%] ml-6 '>
                {"999$"}
                <span className=' text-green-500  font-normal float-right '>
                  120 Sold
                </span>
              </span>
            </span>

            <span className=' flex gap-7'>
              <button className=' bg-black text-white px-4 py-3  rounded-md mt-4'>
                Buy Now
              </button>
              <button className=' bg-black text-white px-4 py-3 rounded-md mt-4'>
                See Details
              </button>
            </span>
            <div className=' flex justify-end'>
              <p className='  text-green-800 flex items-center gap-3 hover:text-green-500 cursor-pointer'>
                See More Events <AiOutlineArrowRight />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
