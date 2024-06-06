import { Container, NavBar } from "../components";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const TrabajosPage = () => {
  return (
    <>
      <NavBar />
      <Box bg="black">
        <Container px={{ base: 0 }}>
          <Box
            bg="black"
            h="45rem"
            backgroundImage={"/trabajos_1.jpg"}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          >
            <Box pt="15rem" pl="6rem">
              <Text fontWeight="extrabold" fontSize="3rem" lineHeight="3.75rem">
                Geometrías
              </Text>
              <Text fontWeight="extrabold" fontSize="3rem" lineHeight="3.75rem">
                Del
              </Text>
              <Text
                fontWeight="extrabold"
                fontSize="3rem"
                lineHeight="3.75rem"
                color="red.500"
              >
                Alma
              </Text>
              <Text fontWeight="extrabold" fontSize="1.5rem">
                REDISEÑA
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box
          bg="white"
          h={{ base: "48rem", lg: "45rem" }}
          backgroundImage={"/trabajos_2.jpg"}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Text
            w={{ base: "100%", lg: "38.5rem" }}
            fontWeight="black"
            fontSize="2rem"
            lineHeight="2.25rem"
            pt="5rem"
          >
            <Text as="span" color="red.500">
              Manuela Panasco
            </Text>{" "}
            es una artista uruguaya que busca expresar emociones y vivencias
            propias a través del arte. En esta ocasión, estará realizando un
            proyecto en el marco de la propuesta{" "}
            <Text as="span" color="red.500">
              &quot;Rediseña&quot;
            </Text>
            , inspirada en el escultor{" "}
            <Text as="span" color="red.500">
              Octavio Podestá
            </Text>
            . Se combinarán ambos estilos para generar un producto que logre
            capturar y combinar la esencia de ambos artistas, creando piezas de
            arte únicas.
          </Text>
          {/* <Image
          src={"/trabajos_2.jpg"}
          alt="Prueba"
          fill
          style={{ objectFit: "contain" }}
        /> */}
        </Box>
        <Flex
          h={{ base: "100%", lg: "auto" }}
          pt={{ base: "1rem", lg: "3rem" }} // sacar
          pb="3rem"
          alignItems="center"
          gap="1.5rem"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Box
            bg="black"
            w={{ base: "100%", lg: "25rem" }}
            h="30rem"
            position="relative"
          >
            <Image
              src={"/la_paternidad.png"}
              alt="Prueba"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Flex flexDir="column" w={{ base: "100%", lg: "50rem" }}>
            <Text
              color="blackAlpha.700"
              fontSize="2.5rem"
              fontWeight="bold"
              lineHeight="2.25rem"
            >
              La Paternidad
            </Text>
            <Text
              color="red.500"
              fontSize="1.75rem"
              fontWeight="bold"
              lineHeight="2.25rem"
            >
              Manuela Panasco
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              Técnica Mixta, Materiales reciclables
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              30 x 40 cm
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              U$S 500, Grabado Único
            </Text>
            <Text
              fontSize="1.25rem"
              fontWeight="semibold"
              lineHeight="1.625rem"
            >
              La paternidad es una relación intrincadamente compleja, moldeada
              por un mosaico de experiencias. A menudo, el padre emerge como una
              figura de rigidez, forjada por las adversidades que enfrentó,
              diseñada para proteger. No obstante, este escudo debe suavizarse,
              curvarse al encuentro del niño. La inocencia infantil, ajena a las
              sombras del mundo, requiere de un padre que aprenda a
              flexibilizarse, a transformarse, para guiar y formar sin romper la
              delicadeza de su espíritu puro.
            </Text>
          </Flex>
        </Flex>
        <Flex
          h={{ base: "100%", lg: "auto" }}
          pb="3rem"
          alignItems="center"
          gap="1.5rem"
          flexDir={{ base: "column-reverse", lg: "row" }}
        >
          <Flex flexDir="column" w={{ base: "100%", lg: "50rem" }}>
            <Text
              color="blackAlpha.700"
              fontSize="2.5rem"
              fontWeight="bold"
              lineHeight="2.25rem"
            >
              Autosabotaje
            </Text>
            <Text
              color="red.500"
              fontSize="1.75rem"
              fontWeight="bold"
              lineHeight="2.25rem"
            >
              Manuela Panasco
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              Grabado sobre Tela, Materiales reciclables
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              15 x 21.5 cm
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              U$S 35 por unidad, Serie de 20 grabados únicos
            </Text>
            <Text
              fontSize="1.25rem"
              fontWeight="semibold"
              lineHeight="1.625rem"
            >
              Autosabotaje es un fenómeno curioso que a menudo emerge justo
              cuando todo parece estar en su lugar, cuando la vida fluye sin
              contratiempos y la felicidad se asoma en el horizonte. Motivados
              por un miedo latente a la felicidad o por la incredulidad en
              nuestro merecimiento de dicha tranquilidad podemos encontrarnos
              derribando nuestras propias estructuras de éxito y alegría. Este
              acto de autosabotaje, nacido de inseguridades arraigadas o traumas
              no resueltos, es un intento inconsciente de regresar a un estado
              más conocido y controlable de lucha o descontento, sacrificando
              asi nuestra propia serenidad y progreso.
            </Text>
          </Flex>
          <Box
            bg="black"
            w={{ base: "100%", lg: "25rem" }}
            h="30rem"
            position="relative"
          >
            <Image
              src={"/autosabotaje.png"}
              alt="Prueba"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Flex>
        <Flex
          h={{ base: "100%", lg: "auto" }}
          pb="3rem"
          alignItems="center"
          gap="1.5rem"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Box
            bg="black"
            w={{ base: "100%", lg: "25rem" }}
            h="30rem"
            position="relative"
          >
            <Image
              src={"/la_contradiccion.png"}
              alt="Prueba"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Flex flexDir="column" w={{ base: "100%", lg: "50rem" }}>
            <Text
              color="blackAlpha.700"
              fontSize="2.5rem"
              fontWeight="bold"
              lineHeight="2.25rem"
            >
              Mi Contradicción
            </Text>
            <Text
              color="red.500"
              fontSize="1.75rem"
              fontWeight="bold"
              lineHeight="2.25rem"
            >
              Manuela Panasco
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              Grabado sobre Tela, Materiales reciclables
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              15 x 21.5 cm
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              U$S 35 por unidad, Serie de 20 grabados únicos
            </Text>
            <Text
              fontSize="1.25rem"
              fontWeight="semibold"
              lineHeight="1.625rem"
            >
              La contradicción representa el momento de introspección critica en
              el que nuestra esencia se halla en un cruce de caminos,
              confrontada por deseos y necesidades en conflicto. Sin una
              dirección clara, nos encontramos en una lucha interna, buscando
              entender qué es lo que verdaderamente deseamos en medio de
              contradicciones que nos desafian a definir quiénes somos y que
              queremos ser.
            </Text>
          </Flex>
        </Flex>
        <Flex
          h={{ base: "100%", lg: "auto" }}
          pb="3rem"
          alignItems="center"
          gap="1.5rem"
          flexDir={{ base: "column-reverse", lg: "row" }}
        >
          <Flex flexDir="column" w={{ base: "100%", lg: "50rem" }}>
            <Text
              color="blackAlpha.700"
              fontSize="2.5rem"
              fontWeight="bold"
              lineHeight="2.25rem"
            >
              Quiero ser un Niño
            </Text>
            <Text
              color="red.500"
              fontSize="1.75rem"
              fontWeight="bold"
              lineHeight="2.25rem"
            >
              Manuela Panasco
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              Grabado sobre Tela, Materiales reciclables
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              15 x 21.5 cm
            </Text>
            <Text
              color="blackAlpha.500"
              fontSize="1.25rem"
              fontWeight="bold"
              lineHeight="1.5rem"
            >
              U$S 35 por unidad, Serie de 20 grabados únicos
            </Text>
            <Text
              fontSize="1.25rem"
              fontWeight="semibold"
              lineHeight="1.625rem"
            >
              Quiero ser un Niño es crecer cuando aún deseamos ser niños es una
              experiencia agridulce marcada por la nostalgia y la resistencia.
              Desde una edad temprana, la sociedad nos impulsa hacia la adultez,
              con expectativas y responsabilidades que parecen adelantarse a
              nuestro propio ritmo. Este empuje precoz hacia la madurez a menudo
              se siente como un robo de la inocencia y la libertad, un forzoso
              abandono del mundo lúdico y sin preocupaciones que una vez
              conocimos. En este tránsito, cada paso hacia adelante puede
              sentirse como una pequeña despedida de la juventud, mientras
              enfrentamos el desafío de hallar un equilibrio entre el encanto de
              la niñez y las exigencias del mundo adulto.
            </Text>
          </Flex>
          <Box
            bg="black"
            w={{ base: "100%", lg: "25rem" }}
            h="30rem"
            position="relative"
          >
            <Image
              src={"/quiero_ser_un_ninio.png"}
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

export default TrabajosPage;
