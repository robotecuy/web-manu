import { Container, NavBar } from "../components";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const TrabajosPage = () => {
  return (
    <>
      <NavBar />
      <Box position="relative" h="100vh">
        <Image
          src={"/torta.png"}
          alt="Prueba"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box pb="0.75rem">
        <Container>
          <Flex justifyContent="center">
            <Text fontSize="5rem" fontWeight="bold">
              Serie Trastornos Alimenticios
            </Text>
          </Flex>
          <Flex>
            <Flex
              flexDir="column"
              gap="0.25rem"
              fontSize="1.5rem"
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
              <Text color="red" fontWeight="bold" fontSize="3.75rem" w="28rem">
                Coming Soon...
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box position="relative" h="100vh">
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

export default TrabajosPage;
