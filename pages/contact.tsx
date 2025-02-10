import { NavBar, Container } from "../components";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <Box h="100vh">
        <Container pt="4rem">
          <Flex gap="1.25rem" flexDir="column">
            <Heading>Contact Information</Heading>
            <Flex gap="1rem">
              <Text fontWeight="bold">Email:</Text>
              <Text>mpanascoart@gmail.com</Text>
            </Flex>
            <Flex gap="1rem">
              <Text fontWeight="bold">Cellphone:</Text>
              <Text>+598 92 293 564</Text>
            </Flex>
            <Flex gap="1rem">
              <Text fontWeight="bold">Located:</Text>
              <Text>Montevideo, Uruguay</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
