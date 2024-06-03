import { NavBar, Container } from "../components";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

const ContactoPage = () => {
  return (
    <>
      <NavBar />
      <Box h="100vh" bg="blackAlpha.400">
        <Container pt="5rem">
          <Box color="white">
            <Text>Manuela Panasco</Text>
            <Text>mpanascoart@gmail.com</Text>
            <Text>Montevideo, Uruguay</Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactoPage;
