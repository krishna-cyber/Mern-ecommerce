import React from "react";
import styles from "../styles/styles";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const handleSearchChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={`${styles.section}`}>
      <div className=' flex justify-between'>
        <div>
          <Link to='/'>
            <img
              src='https://shopo.quomodothemes.website/assets/images/logo.svg'
              alt=''
              srcset=''
            />
          </Link>
        </div>
        <div className=' relative'>
          <input
            className='border border-gray-400 rounded-lg p-2 w-96'
            type='text'
            placeholder='Search product...'
            name='search'
            id='search'
            onChange={handleSearchChange}
          />

          <span className='inline-block absolute right-[4%] top-0 mt-2 mr-2'>
            <BsSearch className='inline-block absolute ' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
