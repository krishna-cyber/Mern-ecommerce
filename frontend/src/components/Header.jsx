import React from "react";
import styles from "../styles/styles";
import { Link } from "react-router-dom";

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
        <div>
          <input
            className='border border-gray-400 rounded-lg p-2 w-96'
            type='text'
            placeholder='Search product...'
            name='search'
            id='search'
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
