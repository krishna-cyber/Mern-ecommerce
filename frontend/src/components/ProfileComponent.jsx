/** @format */

import {
  Box,
  Card,
  Container,
  CardHeader,
  CardBody,
  CardFooter,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProfileComponent = () => {
  return (
    <Container
      maxW={"container.xl"}
      marginX={"auto"}
      py={"10"}
      display={"flex"}>
      <Card width={"25%"}>
        <CardBody>hello</CardBody>
      </Card>
      <Box>how</Box>
    </Container>
  );
};

export default ProfileComponent;
