/** @format */
import { productData } from "../static/data";
import styles from "../styles/styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

import { AiOutlineShoppingCart } from "react-icons/ai";

import ProductCard from "./ProductCard";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  Flex,
  Tooltip,
  Spacer,
  Container,
  useDisclosure,
} from "@chakra-ui/react";

const BestDeals = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

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
          return <ProductCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default BestDeals;
