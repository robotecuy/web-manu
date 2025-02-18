import { NavBar } from "@/components";
import { Box, Flex, Text, Container, Heading } from "@chakra-ui/react";
import Image from "next/image";

const StatementPage = () => {
  return (
    <>
      <NavBar />
      <Container maxW="container.xl">
        <Flex
          h={{ base: "140vh", md: "100vh" }}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "0", md: "3rem" }}
        >
          <Box
            w={{ base: "100%", md: "50%" }}
            pt="5rem"
            pb={{ base: "2rem", md: "0" }}
          >
            <Heading color="black" fontSize="1.75rem" pb="1rem">
              Artist Statement
            </Heading>
            <Text
              color="black"
              fontSize="1rem"
              fontWeight="normal"
              textAlign="justify"
            >
              I am Manuela Panasco, a developing Uruguayan artist. Currently, I
              am studying Visual Arts at the Catholic University of Montevideo
              and I am simultaneously developing my artistic career. My focus is
              on creating realistic paintings that reflect my experiences,
              especially those that are marginalized by society and perceived as
              hidden or forbidden. In addition to my work in painting, I am also
              exploring photography as part of my artistic career. I make short
              series with various themes, although my main objective is to
              convey a feeling of nostalgia and the perception of loss of
              control over the passage of time. My long-term goal is to fully
              develop in the Uruguayan art industry and contribute to its
              expansion beyond national borders. I firmly believe in the
              potential of art to transcend cultural barriers and generate
              meaningful dialogues. I am committed to continuing to grow as an
              artist and contribute my unique vision to the contemporary art
              scene.
            </Text>
          </Box>
          <Box
            w={{ base: "100%", md: "50%" }}
            h="100%"
            position="relative"
            mb={{ base: "1rem", md: "0" }}
          >
            <Image
              src="/manuela.jpg"
              alt="Prueba"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default StatementPage;
