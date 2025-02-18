import { NavBar } from "@/components";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const ExhibitionsPage = () => {
  return (
    <>
      <NavBar />
      <Container maxW="container.xl" pt="4rem" px={4}>
        <Flex
          w="100%"
          gap="1rem"
          pb="2.5rem"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box w="100%" h="23rem" position="relative">
            <Image
              src={"/exhibitions/rediseña.jpg"}
              alt="Prueba"
              fill
              style={{ objectFit: "cover", borderRadius: "0.375rem" }}
            />
          </Box>
          <Box w="100%">
            <Heading fontSize="1.5rem">Winner of Rediseña 2024</Heading>
            <Text color="grey">Hello World</Text>
          </Box>
        </Flex>
        <Flex
          w="100%"
          gap="1.5rem"
          pb="2.5rem"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box w="100%" h="23rem" position="relative">
            <Image
              src={"/aguaviva.jpg"}
              alt="Prueba"
              fill
              style={{ objectFit: "cover", borderRadius: "0.375rem" }}
            />
          </Box>
          <Box w="100%">
            <Heading fontSize="1.5rem">
              Shortlisted New Emerging Artist 2024
            </Heading>
            <Text color="grey">Hello World</Text>
          </Box>
        </Flex>
        <Flex
          w="100%"
          gap="1.5rem"
          pb="2.5rem"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box w="100%" h="23rem" position="relative">
            <Image
              src={"/exhibitions/certificado_women.jpg"}
              alt="Prueba"
              fill
              style={{ objectFit: "cover", borderRadius: "0.375rem" }}
            />
          </Box>
          <Box w="100%">
            <Heading fontSize="1.5rem">
              Shortlisted for Emerging Women Artist Award: 2024 Fall Edition
            </Heading>
            <Text color="grey">Hello World</Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default ExhibitionsPage;
