/** @format */

import {
  Box,
  Container,
  HStack,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productData } from "../static/data";

const ProductDetails = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);

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
            </Box>
          </Flex>
        </Container>
      )}

      <Footer />
    </>
  );
};

export default ProductDetails;
