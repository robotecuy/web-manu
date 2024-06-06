import { Container, NavBar } from "../components";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const PinturasPage = () => {
  return (
    <>
      <NavBar />
      <Box position="relative" h={{ base: "15rem", lg: "100vh" }}>
        <Image
          src={"/torta.png"}
          alt="Prueba"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box pb="0.75rem">
        <Container>
          <Flex justifyContent="center" py={{ base: "0.5rem", lg: "0" }}>
            <Text fontSize={{ base: "1.625rem", lg: "5rem" }} fontWeight="bold">
              Serie Trastornos Alimenticios
            </Text>
          </Flex>
          <Flex flexDir={{ base: "column", lg: "row" }}>
            <Flex
              flexDir="column"
              gap="0.25rem"
              fontSize={{ base: "1.125rem", lg: "1.5rem" }}
              fontWeight="semibold"
              color="blackAlpha.600"
              w="100%"
            >
              <Text>Listado</Text>
              <Text>El Atracón: Comiendo nuestros sentimientos</Text>
              <Text>Mido mi valor</Text>
              <Text>Armas</Text>
              <Text>Distorsión de lo reflejado</Text>
              <Text>Vomitando tristeza</Text>
              <Text>Idolatra</Text>
              <Text>Aquello gigante</Text>
              <Text>Mi cama</Text>
              <Text>Al acecho</Text>
              <Text>Gloria a Dios</Text>
              <Text>Tengo frío</Text>
              <Text>Me volví un monstruo</Text>
            </Flex>
            <Flex alignItems="end">
              <Text
                textAlign="right"
                color="red"
                fontWeight="bold"
                fontSize={{ base: "2rem", lg: "3.75rem" }}
                w="28rem"
              >
                Coming Soon...
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box position="relative" h={{ base: "14rem", lg: "48rem" }}>
        <Image
          src={"/manuel-cuadro-2.png"}
          alt="Prueba"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
    </>
  );
};

export default PinturasPage;
