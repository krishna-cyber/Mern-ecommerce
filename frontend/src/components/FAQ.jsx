/** @format */

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import styles from "../styles/styles";

const FAQ = () => {
  return (
    <div className={`${styles.section}`}>
      <p className=' font-bold text-4xl'>FAQ</p>
      <Accordion className=' mt-4' allowToggle>
        <AccordionItem className=' p-2'>
          <h2>
            <AccordionButton className=' font-bold text-xl'>
              <Box as='span' flex='1' textAlign='left'>
                How do I track my Order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className=' p-2'>
          <h2>
            <AccordionButton className=' font-bold text-xl'>
              <Box as='span' flex='1' textAlign='left'>
                What is your return policy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className=' p-2'>
          <h2>
            <AccordionButton className=' font-bold text-xl'>
              <Box as='span' flex='1' textAlign='left'>
                How do I return an item?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className=' p-2'>
          <h2>
            <AccordionButton className=' font-bold text-xl'>
              <Box as='span' flex='1' textAlign='left'>
                How do I contact customer service?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className=' p-2'>
          <h2>
            <AccordionButton className=' font-bold text-xl'>
              <Box as='span' flex='1' textAlign='left'>
                Can I change or cancel my order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className=' p-2'>
          <h2>
            <AccordionButton className=' font-bold text-xl'>
              <Box as='span' flex='1' textAlign='left'>
                What payment methods do you accept?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className=' p-2'>
          <h2>
            <AccordionButton className=' font-bold text-xl'>
              <Box as='span' flex='1' textAlign='left'>
                Do you offer International Shipping?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
