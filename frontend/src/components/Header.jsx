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
import { RxCross2 } from "react-icons/rx";
import { RxDashboard } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Image,
} from "@chakra-ui/react";
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
  Text,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
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
import {
  addFromWishlist,
  addToCart,
  deleteFromCart,
} from "../reducers/cartSlice";
import { resetWishlist } from "../reducers/wishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  return (
    <>
      {" "}
      <Button variant={"unstyled"} onClick={onOpen}>
        <AiOutlineHeart className='inline-block text-2xl' />
        <Badge colorScheme='green' variant='solid' className='ml-1'>
          {wishlistItems.length}
        </Badge>
      </Button>
      {/* Drawer for wishlist */}
      <Drawer size={"sm"} isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Wishlist Items:</DrawerHeader>

          <DrawerBody>
            {wishlistItems &&
              wishlistItems.map((item) => {
                return (
                  <>
                    <Card marginBottom={"1.5"}>
                      <CardBody className=' flex '>
                        <Box className=' flex'>
                          {" "}
                          <Image
                            height={"16"}
                            src={`${item.image_Url[0].url}`}
                            alt={`${item.category}`}
                          />
                          <Box className=' flex flex-col gap-3'>
                            {" "}
                            <Text fontWeight={"semibold"}>{item.name}</Text>
                            <Box className=' flex justify-between'>
                              {" "}
                              <Text fontWeight={"thin"} color={"red"}>
                                USD {item.price}
                              </Text>
                            </Box>
                          </Box>
                        </Box>
                        <IconButton
                          variant={"ghost"}
                          colorScheme={"gray"}
                          icon={<RxCross2 />}
                        />
                      </CardBody>
                    </Card>
                  </>
                );
              })}
          </DrawerBody>

          <DrawerFooter>
            <Button
              width={"full"}
              colorScheme={"red"}
              onClick={() => {
                let items = wishlistItems.map((item) => {
                  return { ...item, quantity: 1 };
                });
                dispatch(addFromWishlist(items));
                toast.success("All items have been added to wishlist");
                dispatch(resetWishlist());
                onClose();
              }}
              isDisabled={wishlistItems.length == 0}>
              <span className='flex gap-4'>Add all items to cart</span>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {" "}
      <Button variant={"unstyled"} onClick={onOpen}>
        <BiCartAlt className='inline-block text-2xl' />
        <Badge colorScheme='green' variant='solid' className='ml-1'>
          {cartItems.length}
        </Badge>
      </Button>
      {/* Drawer for wishlist */}
      <Drawer size={"sm"} isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart Items:</DrawerHeader>

          <DrawerBody>
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <>
                    <Card marginBottom={"1.5"}>
                      <CardBody className=' flex '>
                        <Box className=' flex'>
                          {" "}
                          <Image
                            height={"16"}
                            src={`${item.image_Url[0].url}`}
                            alt={`${item.category}`}
                          />
                          <Box className=' flex flex-col gap-3'>
                            {" "}
                            <Text fontWeight={"semibold"}>{item.name}</Text>
                            <Box className=' flex justify-between'>
                              {" "}
                              <Text fontWeight={"thin"} color={"red"}>
                                USD {item.price}
                                <Text fontWeight={"thin"} color={"black"}>
                                  Quantity: {item.quantity}
                                </Text>
                              </Text>
                              <Text fontWeight={"bold"} color={"red"}>
                                Total: {item.price * item.quantity}
                              </Text>
                            </Box>
                          </Box>
                        </Box>
                        <IconButton
                          variant={"ghost"}
                          colorScheme={"gray"}
                          onClick={() => {
                            dispatch(deleteFromCart(item.id));
                          }}
                          icon={<RxCross2 />}
                        />
                      </CardBody>
                    </Card>
                  </>
                );
              })}
          </DrawerBody>

          <DrawerFooter>
            <Button
              width={"full"}
              colorScheme={"red"}
              isDisabled={cartItems.length == 0}>
              <span className='flex gap-4'>
                Checkout <span className=' font-bold'>$ {total}</span>
              </span>
              <span></span>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const Header = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const total = useSelector((state) => state.cart.total);
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
                <Wishlist />
              </li>
              <li>
                {/* <Button variant={"unstyled"} ref={cartBtnRef} onClick={onOpen}>
                  <BiCartAlt className='inline-block text-2xl' />
                  <Badge colorScheme='green' variant='solid' className='ml-1'>
                    {cartItems.length}
                  </Badge>
                </Button> */}
                <Cart />
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
                      <Link to='/profile'>
                        <MenuItem icon={<AiOutlineUser />} color={"black"}>
                          Profile
                        </MenuItem>
                      </Link>
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
    </>
  );
};

export default Header;
