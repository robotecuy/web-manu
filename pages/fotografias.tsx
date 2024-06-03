import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "../components";
import Image from "next/image";

const FotografiasPage = () => {
  return (
    <>
      <NavBar />
      <Grid
        w="100%"
        bg="blackAlpha.100"
        h="120vh"
        gridTemplateAreas={`"a a b b"
                            "a a b b"
                            "a a c c"
                            "d e c c"
                            "d e c c"
        `}
        gridTemplateColumns="1.2fr 1.2fr 0.6fr 1fr"
        gridTemplateRows="1fr 1.5fr 0.8fr 0.7fr 1fr"
      >
        <GridItem position="relative" gridArea="a">
          <Image
            src={"/luis-1.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="b">
          <Image
            src={"/luis-3.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="c">
          <Image
            src={"/luis-2.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="d">
          <Image
            src={"/cara-1.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="e">
          <Image
            src={"/auto-chocado.jpg"}
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
        gridTemplateAreas={`"a c c c"
                            "a c c c"
                            "b c c c"
                            "b d d e"
                            "b d d f"
        `}
        gridTemplateColumns="1.2fr 1fr 1fr 0.8fr"
        gridTemplateRows="2fr 1fr 0.6fr 1.2fr 1.2fr"
      >
        <GridItem position="relative" gridArea="a">
          <Image
            src={"/abuelo-1.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="b">
          <Image
            src={"/abuelo-2.png"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="c">
          <Image
            src={"/luis-4.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="d">
          <Image
            src={"/subte-1.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="e">
          <Image
            src={"/arbol.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="f">
          <Image
            src={"/espejo.jpg"}
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
        gridTemplateAreas={`"a a b"
                            "a a c"
        `}
      >
        <GridItem position="relative" gridArea="a">
          {" "}
          <Image
            src={"/subte-2.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="b">
          {" "}
          <Image
            src={"/manuel-2.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="c">
          {" "}
          <Image
            src={"/manuel-1.jpg"}
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
        gridTemplateAreas={`"a a f f"
                            "b b f f"
                            "b b g g"
                            "c c g g"
                            "c c h h"
                            "d e h h"
                            
       `}
        gridTemplateColumns="1fr 0.8fr 1.2fr 1fr"
        gridTemplateRows="1.7fr 0.3fr 1.4fr 0.4fr 1.3fr 1.1fr"
      >
        <GridItem position="relative" gridArea="a">
          <Image
            src={"/heladera-3.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="b">
          <Image
            src={"/comida.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="c">
          <Image
            src={"/fuego.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="d">
          <Image
            src={"/fondo.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="e">
          <Image
            src={"/ines.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="f">
          <Image
            src={"/manuel-3.jpg"}
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
            gridTemplateAreas={`"i k k k"
                                "i k k k"
                                "j k k k"
                                "j l m n"
            `}
            gridTemplateColumns="1.6fr 0.8fr 0.8fr 0.8fr"
            gridTemplateRows="1fr 1fr 1fr 1fr"
          >
            <GridItem position="relative" gridArea="i">
              <Image
                src={"/tang.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
            <GridItem position="relative" gridArea="j">
              <Image
                src={"/heladera-2.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
            <GridItem position="relative" gridArea="k">
              <Image
                src={"/heladera-1.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
            <GridItem position="relative" gridArea="l">
              <Image
                src={"/poste.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
            <GridItem position="relative" gridArea="m">
              <Image
                src={"/seniora.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
            <GridItem position="relative" gridArea="n">
              <Image
                src={"/carrito.jpg"}
                alt="Prueba"
                fill
                style={{ objectFit: "cover" }}
              />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem position="relative" gridArea="h">
          <Image
            src={"/auto.jpg"}
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
        gridTemplateAreas={`"a b"
        `}
      >
        <GridItem position="relative" gridArea="a">
          <Image
            src={"/playa.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
        <GridItem position="relative" gridArea="b">
          <Image
            src={"/aguaviva.jpg"}
            alt="Prueba"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default FotografiasPage;
