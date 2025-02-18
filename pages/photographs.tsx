import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "../components";
import Image from "next/image";

const PhotographsPage = () => {
  return (
    <>
      <NavBar />
      <Grid
        w="100%"
        bg="blackAlpha.100"
        h="120vh"
        pt="3.5rem"
        gridTemplateAreas={{
          base: `"a a a a" "b b b b" "c c c c" "d d d d" "e e e e"`,
          md: `"a a b b" "a a b b" "a a c c" "d e c c" "d e c c"`,
        }}
        gridTemplateColumns="1.2fr 1.2fr 0.6fr 1fr"
        gridTemplateRows={{
          base: "auto auto auto auto auto",
          md: "1fr 1.5fr 0.8fr 0.7fr 1fr",
        }}
      >
        <GridItem position="relative" gridArea="a">
          <Image
            src={"/photographs/luis-1.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="b">
          <Image
            src={"/photographs/luis-3.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="c">
          <Image
            src={"/photographs/luis-2.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="d">
          <Image
            src={"/photographs/cara-1.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="e">
          <Image
            src={"/photographs/auto-chocado.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </GridItem>
      </Grid>
      <Grid
        w="100%"
        bg="blackAlpha.100"
        h="170vh"
        gridTemplateAreas={{
          base: `"a a a a" "b b b b" "c c c c" "d d d d" "e e e e" "f f f f"`,
          md: `"a c c c""a c c c" "b c c c" "b d d e" "b d d f"`,
        }}
        gridTemplateColumns="1.2fr 1fr 1fr 0.8fr"
        gridTemplateRows={{
          base: "auto auto auto auto auto auto",
          md: "2fr 1fr 0.6fr 1.2fr 1.2fr",
        }}
      >
        <GridItem position="relative" gridArea="a">
          <Image
            src={"/photographs/abuelo-1.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="b">
          <Image
            src={"/photographs/abuelo-2.png"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="c">
          <Image
            src={"/photographs/luis-4.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="d">
          <Image
            src={"/photographs/subte-1.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="e">
          <Image
            src={"/photographs/arbol.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="f">
          <Image
            src={"/photographs/espejo.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
      </Grid>
      <Grid
        w="100%"
        bg="blackAlpha.100"
        h="90vh"
        gridTemplateAreas={{
          base: `"a a a" "b b b" "c c c"`,
          md: `"a a b" "a a c"`,
        }}
      >
        <GridItem position="relative" gridArea="a">
          {" "}
          <Image
            src={"/photographs/subte-2.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="b">
          {" "}
          <Image
            src={"/photographs/manuel-2.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="c">
          {" "}
          <Image
            src={"/photographs/manuel-1.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
      </Grid>
      <Grid
        w="100%"
        bg="blackAlpha.100"
        h="220vh"
        gridTemplateAreas={{
          base: `"a a a a" "b b b b" "c c c c" "d d d d" "e e e e" "f f f f" "g g g g" "h h h h"`,
          md: `"a a f f" "b b f f""b b g g""c c g g""c c h h""d e h h"`,
        }}
        gridTemplateColumns="1fr 0.8fr 1.2fr 1fr"
        gridTemplateRows={{
          base: "auto auto auto auto auto auto auto auto",
          md: "1.7fr 0.3fr 1.4fr 0.4fr 1.3fr 1.1fr",
        }}
      >
        <GridItem position="relative" gridArea="a">
          <Image
            src={"/photographs/heladera-3.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="b">
          <Image
            src={"/photographs/comida.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="c">
          <Image
            src={"/photographs/fuego.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="d">
          <Image
            src={"/photographs/fondo.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="e">
          <Image
            src={"/photographs/ines.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="f">
          <Image
            src={"/photographs/manuel-3.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="g">
          <Grid
            w="100%"
            h="100%"
            bg="blackAlpha.100"
            gridTemplateAreas={{
              base: `"i i i i" "j j j j" "k k k k" "l l l l" "m m m m" "n n n n" "h h h h"`,
              md: `"i k k k" "i k k k" "j k k k" "j l m n"`,
            }}
            gridTemplateColumns="1.6fr 0.8fr 0.8fr 0.8fr"
            gridTemplateRows="1fr 1fr 1fr 1fr"
          >
            <GridItem position="relative" gridArea="i">
              <Image
                src={"/photographs/tang.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
            <GridItem position="relative" gridArea="j">
              <Image
                src={"/photographs/heladera-2.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
            <GridItem position="relative" gridArea="k">
              <Image
                src={"/photographs/heladera-1.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
            <GridItem position="relative" gridArea="l">
              <Image
                src={"/photographs/poste.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
            <GridItem position="relative" gridArea="m">
              <Image
                src={"/photographs/seniora.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
            <GridItem position="relative" gridArea="n">
              <Image
                src={"/photographs/carrito.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem position="relative" gridArea="h">
          <Image
            src={"/photographs/auto.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
      </Grid>
      <Grid
        w="100%"
        bg="blackAlpha.100"
        h="70vh"
        gridTemplateAreas={{ base: `"a a" "b b"`, md: `"a b"` }}
      >
        <GridItem position="relative" gridArea="a">
          <Image
            src={"/photographs/playa.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="b">
          <Image
            src={"/photographs/aguaviva.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default PhotographsPage;
