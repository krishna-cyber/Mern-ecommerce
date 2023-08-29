/** @format */

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Center,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Header, Footer } from "../Routes/route";
import styles from "../styles/styles";

const Events = () => {
  return (
    <>
      <Header />
      <Card className={styles.section}>
        <CardBody>
          <Flex justifyContent={"space-between"}>
            <img
              className=' h-80'
              src='https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg'
              alt=''
            />
            <VStack className=' flex justify-center items-center w-1/2'>
              <h1 className=' text-left w-full text-2xl font-bold'>
                Iphone 14 pro max 8/256gb
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                velit adipisci atque eum, quaerat, harum voluptas expedita
                excepturi reprehenderit iure rerum, nemo nesciunt labore nostrum
                nisi eligendi aperiam error maxime!
              </p>
              <div className=' w-full flex justify-between font-semibold'>
                <span className=' text-lg flex gap-4'>
                  <span className=' line-through text-red-600 '>1099$</span>
                  999$<span></span>
                </span>
                <span className=' text-green-400 text-lg'>120 sold</span>
              </div>
              <p className=' text-3xl text-red-600 font-bold'>Time's Up</p>
              <HStack className=' w-1/2 justify-between mt-4'>
                <Button
                  size={"lg"}
                  variant={"solid"}
                  background={"#000"}
                  _hover={"#000"}
                  color={"white"}>
                  See Details
                </Button>
                <Button
                  size={"lg"}
                  variant={"outline"}
                  background={"green.400"}
                  _hover={"green.500"}
                  color={"white"}>
                  Buy Now
                </Button>
              </HStack>
            </VStack>
          </Flex>
        </CardBody>
      </Card>
      <Card className={styles.section}>
        <CardBody>
          <Flex justifyContent={"space-between"}>
            <img
              className=' h-80'
              src='https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg'
              alt=''
            />
            <VStack className=' flex justify-center items-center w-1/2'>
              <h1 className=' text-left w-full text-2xl font-bold'>
                Iphone 14 pro max 8/256gb
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                velit adipisci atque eum, quaerat, harum voluptas expedita
                excepturi reprehenderit iure rerum, nemo nesciunt labore nostrum
                nisi eligendi aperiam error maxime!
              </p>
              <div className=' w-full flex justify-between font-semibold'>
                <span className=' text-lg flex gap-4'>
                  <span className=' line-through text-red-600 '>1099$</span>
                  999$<span></span>
                </span>
                <span className=' text-green-400 text-lg'>120 sold</span>
              </div>
              <p className=' text-3xl text-red-600 font-bold'>Time's Up</p>
              <HStack className=' w-1/2 justify-between mt-4'>
                <Button
                  size={"lg"}
                  variant={"solid"}
                  background={"#000"}
                  _hover={"#000"}
                  color={"white"}>
                  See Details
                </Button>
                <Button
                  size={"lg"}
                  variant={"outline"}
                  background={"green.400"}
                  _hover={"green.500"}
                  color={"white"}>
                  Buy Now
                </Button>
              </HStack>
            </VStack>
          </Flex>
        </CardBody>
      </Card>

      <Footer />
    </>
  );
};

export default Events;
