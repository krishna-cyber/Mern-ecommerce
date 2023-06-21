import React, { useState } from "react";
import styles from "../styles/styles";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiChevronDown, BiCartAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
import { productData } from "../static/data";

import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Img,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const handleSearchChange = (e) => {
    //if search field is empty
    if (e.target.value === "") {
      setSearchTerm(e.target.value);
      return setSearchData([]);
    }

    setSearchTerm(e.target.value);
    //filter product data
    console.log(searchTerm);
    const results = productData.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(results);
    setSearchData(results);
  };
  return (
    <>
      <div className={`${styles.section}`}>
        <div className=' flex justify-between items-center'>
          <div>
            <Link to='/'>
              <img
                src='https://shopo.quomodothemes.website/assets/images/logo.svg'
                alt=''
                srcset=''
              />
            </Link>
          </div>
          <div className=' relative flex-shrink-0 flex-grow-0 w-1/2'>
            <input
              className=' border-blue-400 border-2 rounded-lg p-2 w-full'
              onChange={handleSearchChange}
              type='text'
              placeholder='Search product...'
              name='search'
              id='search'
              value={searchTerm}
            />
            {searchData.length !== 0 && searchData ? (
              <TableContainer maxWidth='100%'>
                <Table className='absolute bg-white z-10' variant={"striped"}>
                  {" "}
                  {searchData.map((product) => {
                    return (
                      <Tr>
                        <div className='flex justify-between items-center p-2'>
                          <div className='flex items-center'>
                            <Image
                              className=' h-8 w-8'
                              src={product.image_Url.url}
                            />
                            <p className='ml-2'>{product.name}</p>
                          </div>
                          <p className='mr-2'>${product.price}</p>
                        </div>
                      </Tr>
                    );
                  })}
                </Table>
              </TableContainer>
            ) : null}
            <span className='inline-block absolute right-[4%] cursor-pointer top-0 mt-2 mr-2'>
              <BsSearch className='inline-block  ' />
            </span>
          </div>
          <div className='button'>
            <Link to='/seller'>
              <button className='bg-black  text-white font-semibold py-4 px-4 rounded-lg'>
                Become a partner
                <BiChevronRight className='inline-block ml-1 text-lg' />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <nav className=' bg-[#332AC8] pt-4 '>
        <div className='nav_options flex justify-between w-11/12 mx-auto'>
          <Menu>
            <MenuButton
              size={"lg"}
              background={"white"}
              roundedBottom={"none"}
              textColor={"black"}
              padding={"0.5rem 1rem"}
              as={Button}
              leftIcon={<BiMenuAltLeft />}
              rightIcon={<BiChevronDown />}>
              All categories
            </MenuButton>
            <MenuList>
              <MenuItem
                icon={
                  <Image
                    className=' h-8 w-8'
                    src={"../../public/categoriesIcon/icon2.webp"}
                  />
                }>
                Computers and Laptops
              </MenuItem>
              <MenuItem
                icon={
                  <Image
                    className=' h-8 w-8'
                    src={"../../public/categoriesIcon/icon1.png"}
                  />
                }>
                Cosmetics and Body care
              </MenuItem>
              <MenuItem
                icon={
                  <Image
                    className=' h-8 w-8'
                    src={"../../public/categoriesIcon/icon8.webp"}
                  />
                }>
                Accesories
              </MenuItem>
              <MenuItem
                icon={
                  <Image
                    className=' h-8 w-8'
                    src={"../../public/categoriesIcon/icon4.webp"}
                  />
                }>
                Cloths
              </MenuItem>
              <MenuItem
                icon={
                  <Image
                    className=' h-8 w-8'
                    src={"../../public/categoriesIcon/icon5.jpeg"}
                  />
                }>
                Shoes
              </MenuItem>
              <MenuItem
                icon={
                  <Image
                    className=' h-8 w-8'
                    src={"../../public/categoriesIcon/gift.jpeg"}
                  />
                }>
                Gifts
              </MenuItem>
              <MenuItem
                icon={
                  <Image
                    className=' h-8 w-8'
                    src={"../../public/categoriesIcon/icon6.jpg"}
                  />
                }>
                Pet Care
              </MenuItem>
              <MenuItem
                icon={
                  <Image
                    className=' h-8 w-8'
                    src={"../../public/categoriesIcon/icon7.webp"}
                  />
                }>
                Mobile and Tablets
              </MenuItem>
              <MenuItem
                icon={
                  <Image
                    className=' h-8 w-8'
                    src={"../../public/categoriesIcon/icon8.webp"}
                  />
                }>
                Music and Gaming
              </MenuItem>
              <MenuItem
                icon={
                  <Image
                    className=' h-8 w-8'
                    src={"../../public/categoriesIcon/icon9.webp"}
                  />
                }>
                Others
              </MenuItem>
            </MenuList>
          </Menu>
          <div className='nav_options'>
            <ul className=' flex gap-6 font-semibold'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? " text-green-500 " : " text-white"
                }>
                Home
              </NavLink>
              <NavLink
                to='/bestselling'
                className={({ isActive }) =>
                  isActive ? " text-green-500 " : " text-white"
                }>
                Best selling
              </NavLink>

              <NavLink
                to='/products'
                className={({ isActive }) =>
                  isActive ? " text-green-500 " : " text-white"
                }>
                Products
              </NavLink>
              <NavLink
                to='/EVENTS'
                className={({ isActive }) =>
                  isActive ? " text-green-500 " : " text-white"
                }>
                Events
              </NavLink>
              <NavLink
                to='/FAQ'
                className={({ isActive }) =>
                  isActive ? " text-green-500 " : " text-white"
                }>
                FAQ
              </NavLink>
            </ul>
          </div>
          <div className='cartoptions'>
            <ul className=' flex gap-6 font-semibold text-white'>
              <li>
                <Link to='/wishlist'>
                  <AiOutlineHeart className='inline-block text-2xl' />
                </Link>
              </li>
              <li>
                <Link to='/cart'>
                  <BiCartAlt className='inline-block text-2xl' />
                </Link>
              </li>
              <li>
                <Link to='/login'>
                  <FaRegUserCircle className='inline-block text-2xl' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
