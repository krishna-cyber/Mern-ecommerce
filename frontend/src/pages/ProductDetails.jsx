/** @format */

import {
  Box,
  Container,
  HStack,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabIndicator,
  Tab,
  TabPanel,
  Card,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import { Header, Footer } from "../Routes/route";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productData } from "../static/data";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetails = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQuantity] = useState(1);

  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const data =
      productData &&
      productData.find((product) => product.name === productName);
    console.log(data);
    setProduct(data);
  }, [name]);
  return (
    <>
      <Header />
      {product && (
        <Container p={"1.5"} maxW={"container.lg"}>
          <Flex
            py={"20px"}
            columnGap={"10"}
            justifyContent={"center"}
            alignItems={"flex-start"}>
            <Box width={"30%"} boxSize={"lg"} alignSelf={"center"}>
              <Image src={product.image_Url[0].url} alt={product.name} />
            </Box>
            <Box width={"70%"} justifySelf={"flex-start"}>
              <Heading as={"h1"} fontSize={"2xl"}>
                {product.name}
              </Heading>
              <Text>{product.description}</Text>
              <Text fontSize={"lg"} fontWeight={"semibold"} color={"green"}>
                ${product.price}
              </Text>{" "}
              <Button
                variant={"solid"}
                colorScheme={"green"}
                onClick={() => {
                  setQuantity(qty + 1);
                }}>
                +
              </Button>
              <input
                className=' w-10 text-center opacity-100'
                type='text'
                value={qty}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <Button
                variant={"solid"}
                colorScheme={"red"}
                isDisabled={qty <= 1}
                onClick={() => {
                  setQuantity(qty - 1);
                }}>
                -
              </Button>
              <HStack marginTop={"10"} justify={"space-between"}>
                <Button variant={"solid"} colorScheme={"green"} size={"lg"}>
                  Buy Now
                </Button>
                <Button
                  variant={"solid"}
                  backgroundColor={"purple"}
                  colorScheme={"teal"}
                  size={"lg"}>
                  Send Message to seller
                </Button>
                <Button
                  variant={"solid"}
                  colorScheme={"blue"}
                  size={"lg"}
                  leftIcon={<AiOutlineShoppingCart />}
                  backgroundColor={"black"}>
                  Add to Cart
                </Button>
              </HStack>
            </Box>
          </Flex>
        </Container>
      )}

      {product && (
        <Card maxW={"container.lg"} mx={"auto"}>
          {" "}
          <Tabs colorScheme='green' variant={"enclosed-colored"}>
            <TabList justifyContent={"space-around"} fontWeight={"semibold"}>
              <Tab>Product Details</Tab>

              <Tab>Product Reviews</Tab>
              <Tab>Seller Information</Tab>
            </TabList>
            <TabIndicator
              mt='-1.5px'
              height='3px'
              bg='red.500'
              borderRadius='1px'
            />
            <TabPanels>
              <TabPanel>
                <Text>{product.description}</Text>
              </TabPanel>
              <TabPanel>
                <Text align={"center"}>No Ratings Yet!</Text>
              </TabPanel>
              <TabPanel>
                <HStack justifyContent={"space-between"}>
                  <Box width={"50%"}>
                    <VStack>
                      <HStack>
                        <Avatar
                          size={"lg"}
                          objectFit={"fill"}
                          src={product.shop.shop_avatar.url}
                        />
                        <Box>
                          <Text color={"blue.600"} fontSize={"medium"}>
                            {product.shop.name}
                          </Text>
                          <Text>({product.shop.ratings}) Ratings</Text>
                        </Box>
                      </HStack>
                      <Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. A, quidem exercitationem natus est tempore
                        praesentium placeat pariatur recusandae eum repellat
                        ratione neque ipsa, repellendus illo velit omnis, quo
                        doloribus? Ullam!
                      </Text>
                    </VStack>
                  </Box>
                  <VStack>
                    <span>
                      Joined On:
                      <span className=' font-bold ml-3'>29 July, 2022</span>
                    </span>
                    <span>
                      Last Updated:
                      <span className=' font-bold ml-3'>29 July, 2022</span>
                    </span>
                    <span>
                      Total products:
                      <span className=' font-bold ml-3'>1100</span>
                    </span>
                    <Button
                      bg={"black"}
                      color={"white"}
                      colorScheme={"blackAlpha"}>
                      Visit Shop
                    </Button>
                  </VStack>
                </HStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      )}
      <SimilarProduct />
      <Footer />
    </>
  );
};

export default ProductDetails;
