import { NavBar, Container } from "../components";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

const ContactoPage = () => {
  return (
    <>
      <NavBar />
      <Box h="100vh" bg="blue"></Box>
      <Box h="52rem" bg="black" p="2rem">
        <Container h="100%" display="flex" justifyContent="space-between">
          <Flex w="48%" flexDir="column" justifyContent="space-between">
            <Box>
              <Heading color="white" fontSize="5rem" pb="1rem">
                Sobre mi
              </Heading>
              <Text
                color="white"
                fontSize="1.25rem"
                fontWeight="normal"
                textAlign="justify"
              >
                Soy Manuela Panasco, una artista uruguaya en desarrollo.
                Actualmente, estoy estudiando Artes Visuales en la Universidad
                Católica de Montevideo y simultáneamente estoy desarrollando mi
                carrera artística. Mi enfoque se centra en la creación de
                pinturas realistas que reflejen mis vivencias, especialmente
                aquellas que son marginadas por la sociedad y percibidas como
                ocultas o prohibidas. Además de mi trabajo en pintura, también
                estoy explorando la fotografía como parte de mi carrera
                artística. Realizo series cortas con diversas temáticas, aunque
                mi principal objetivo es transmitir una sensación de nostalgia y
                la percepción de la pérdida de control frente al paso del
                tiempo. Mi objetivo a largo plazo es desarrollarme plenamente en
                la industria del arte uruguayo y contribuir a su expansión más
                allá de las fronteras nacionales. Creo firmemente en el
                potencial del arte para trascender barreras culturales y generar
                diálogos significativos. Estoy comprometida a seguir creciendo
                como artista y aportar mi visión única al panorama artístico
                contemporáneo.
              </Text>
            </Box>
            <Box>
              <Text color="white">Manuela Panasco</Text>
              <Text color="white">mpanascoart@gmail.com</Text>
              <Text color="white">Montevideo, Uruguay</Text>
            </Box>
          </Flex>
          <Box bg="white" w="48%" minH="100%" position="relative">
            <Image
              src={"/manuela_home.jpg"}
              alt="Manuela"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* <Image
              src={"/manuela_home.jpg"}
              alt="Manuela"
              // I want the image to darken when i hover over it
              _hover={{ filter: "brightness(0.5)" }}
              transition="0.5s"
            />
            <Text position="absolute">Hola</Text> */}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactoPage;
