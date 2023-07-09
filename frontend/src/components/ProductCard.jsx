/** @format */

import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
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

const ProductCard = ({ item }) => {
  const [modalProduct, setModalProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <div
      className='bg-white w-1/5 flex flex-col items-center p-4 rounded-md shadow-md'
      key={item.id}>
      <span className=' flex w-[70%] '>
        <img
          src={item.image_Url[0].url}
          className=' w-36 h-36'
          alt={item.image_Url[0].url}
        />
        <div className=' ml-auto w-fit flex flex-col gap-3'>
          <AiOutlineHeart className='text-2xl cursor-pointer' />
          <AiOutlineEye
            onClick={() => {
              setModalProduct(item);
              onOpen();
            }}
            className='text-2xl cursor-pointer'
          />
          <AiOutlineShoppingCart className='text-2xl cursor-pointer' />
        </div>
      </span>

      <div
        className='card-body cursor-pointer'
        onClick={
          //with product name navigate to product page replace space with -
          () => {
            navigate(`/product/${item.name.replace(/ /g, "-")}`);
          }
        }>
        <p className=' text-blue-500 pt-4 cursor-pointer'>{item.shop.name}</p>
        <h5 className=' font-medium text-lg'>
          {item.name.length > 40 ? item.name.slice(0, 40) + "..." : item.name}
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
      {modalProduct && (
        <Modal
          blockScrollOnMount={false}
          isOpen={isOpen}
          isCentered={true}
          size='4xl'
          onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <div className='w-1/2'>
                  <img
                    className=' object-fill'
                    src={modalProduct.image_Url[0].url}
                    alt={modalProduct.image_Url[0].url}
                  />
                  <span className=' flex items-center gap-2 mt-4'>
                    {" "}
                    <img
                      src={modalProduct.shop.shop_avatar.url}
                      className=' object-fill h-12 w-12 rounded-full'
                      alt=''
                    />
                    <p className=' text-blue-500 text-lg'>
                      {modalProduct.shop.name.length > 20
                        ? modalProduct.shop.name.slice(0, 20) + "..."
                        : modalProduct.shop.name}
                      <p className=' font-extralight text-md text-black'>
                        ({modalProduct.rating}) rating
                      </p>
                    </p>
                  </span>
                </div>
                <div className=' w-1/2'>
                  <ModalHeader>{modalProduct.name}</ModalHeader>
                  <p>{modalProduct.description}</p>
                  <p className=' flex justify-between text-lg mt-3'>
                    <span className=' text-blue-500 font-semibold flex gap-7 items-center text-2xl'>
                      {modalProduct.price}$
                      <Tooltip label='Add to wishlist' aria-label='A tooltip'>
                        <span>
                          {" "}
                          <AiOutlineHeart className=' text-red-500 cursor-pointer' />
                        </span>
                      </Tooltip>
                    </span>
                    <span>
                      {/* two buttons middle input field with incrementor and decrementor
                       */}
                      <Container
                        className=' flex justify-between items-center'
                        maxW='sm'
                        centerContent>
                        <Spacer />
                        <Button
                          className=' flex gap-3'
                          variant={"ghost"}
                          mr={3}>
                          <span className=' text-2xl'>-</span>
                          <input
                            className=' w-10 text-center'
                            type='text'
                            value='1'
                          />
                          <span className=' text-2xl'>+</span>
                        </Button>
                      </Container>
                    </span>
                    <span className=' text-green-600 font-semibold'>
                      {modalProduct.total_sell} Sold
                    </span>
                  </p>
                </div>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button
                className=' flex gap-3'
                _hover={"none"}
                color={"white"}
                background={"black"}
                mr={3}
                onClick={onClose}>
                Add To Cart
                <AiOutlineShoppingCart className='text-2xl' />
              </Button>
              <Button
                className=' flex gap-3'
                variant={"ghost"}
                mr={3}
                onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
