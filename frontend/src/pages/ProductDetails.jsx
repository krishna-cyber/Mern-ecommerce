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
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
              </Text>
              <Box className=' flex gap-8 flex-col  w-full mt-5' mr={3}>
                <div>
                  {" "}
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
                </div>

                <Box>
                  <Button
                    leftIcon={<AiOutlineShoppingCart />}
                    colorScheme={"green"}
                    background={"black"}
                    color={"white"}
                    size={"lg"}>
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Container>
      )}

      <Footer />
    </>
  );
};

export default ProductDetails;
