/** @format */

import React, { useState } from "react";
import { categoryData } from "../static/data";
import styles from "../styles/styles";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiChevronDown, BiCartAlt } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { Avatar, Image } from "@chakra-ui/react";
import { logoutServer } from "../utils/server";
import { productData } from "../static/data";
import { Badge } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import { logoutUser } from "../reducers/userSlice";
import {
  Table,
  Tr,
  TableContainer,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { selectCartItems } from "../reducers/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector((state) => state.cart.items);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
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

  //logout handler
  const handleLogout = () => {
    logoutServer
      .get("/")
      .then((res) => {
        dispatch(logoutUser());
        navigate("/");
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //button reference for cart button click
  const cartBtnRef = React.useRef();
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
      <nav className=' bg-[#332AC8] pt-4 sticky top-0 '>
        <div className='nav_options flex justify-between w-11/12 mx-auto'>
          {/* Categories menu starts here */}
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
              {categoryData &&
                categoryData.map((item) => {
                  return (
                    <MenuItem
                      key={item.id}
                      onClick={() =>
                        navigate({
                          pathname: "/products",
                          search: `?${createSearchParams({
                            category: item.name,
                          })}`,
                        })
                      }
                      icon={
                        <Image className=' h-8 w-8' src={`${item.image_Url}`} />
                      }>
                      {item.name}
                    </MenuItem>
                  );
                })}
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
            <ul className=' flex gap-6 items-center font-semibold text-white'>
              <li>
                <Button variant={"unstyled"} ref={cartBtnRef} onClick={onOpen}>
                  <AiOutlineHeart className='inline-block text-2xl' />
                  <Badge colorScheme='green' variant='solid' className='ml-1'>
                    0
                  </Badge>
                </Button>
              </li>
              <li>
                <Button variant={"unstyled"} ref={cartBtnRef} onClick={onOpen}>
                  <BiCartAlt className='inline-block text-2xl' />
                  <Badge colorScheme='green' variant='solid' className='ml-1'>
                    {cartItems.length}
                  </Badge>
                </Button>
              </li>
              <li>
                {isAuthenticated && isAuthenticated === true ? (
                  <Menu>
                    <MenuButton>
                      {" "}
                      <Avatar
                        size={"sm"}
                        name={`${user.name}`}
                        src={`${user.avatar.path}`}
                      />
                    </MenuButton>
                    <MenuList>
                      <Button
                        variant={"unstyled"}
                        width={"full"}
                        onClick={onOpen}>
                        <MenuItem icon={<AiOutlineHeart />} color={"black"}>
                          WishList
                        </MenuItem>
                      </Button>
                      <Button
                        variant={"unstyled"}
                        width={"full"}
                        onClick={onOpen}>
                        <MenuItem icon={<BiCartAlt />} color={"black"}>
                          Cart
                        </MenuItem>
                      </Button>

                      <MenuItem icon={<AiOutlineUser />} color={"black"}>
                        Profile
                      </MenuItem>
                      <MenuItem icon={<RxDashboard />} color={"black"}>
                        Dashboard
                      </MenuItem>
                      <MenuItem
                        icon={<BiLogOut />}
                        color={"black"}
                        onClick={handleLogout}>
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  <>
                    <Link to='/login'>
                      <Button size={"sm"}>Login</Button>
                    </Link>
                    <Link to='/signup'>
                      <Button size={"sm"} marginLeft={"2"}>
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Drawer component defined here */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={cartBtnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart Items:</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button width={"full"} colorScheme={"red"}>
              <span>Checkout</span>
              <span>{2}</span>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
