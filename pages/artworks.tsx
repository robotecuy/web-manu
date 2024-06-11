import { NavBar } from "@/components";
import { Artwork } from "@/components/Artwork";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

const ArtworksPage = () => {
  return (
    <>
      <NavBar />
      <Container maxW="container.xl" px="0" py="3.5rem">
        <Grid
          gridTemplateAreas={{
            base: `"a" "b" "c" "d" "e" "f" "g"`,
            md: `"a a b" "c d e" "f g g"`,
          }}
          rowGap={10}
          columnGap={10}
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gridTemplateRows={{
            base: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            md: "1fr 1fr 1fr",
          }}
        >
          <GridItem gridArea="a">
            <Artwork
              src="pintura_comida"
              alt="The Binge: A Feast of Feelings and Emotions"
            />
          </GridItem>
          <GridItem gridArea="b">
            <Artwork src="feeding_the_void" alt="Feeding the void" />
          </GridItem>
          <GridItem gridArea="c">
            <Artwork src="retrato_de_un_gordito" alt="Retrato de un gordito" />
          </GridItem>
          <GridItem gridArea="d">
            <Artwork src="ines" alt="Inés" />
          </GridItem>
          <GridItem gridArea="e">
            <Artwork src="nicolai" alt="Nicolai" />
          </GridItem>
          <GridItem gridArea="f">
            <Artwork src="sargent_study" alt="Study of Lady Agnew" />
          </GridItem>
          <GridItem gridArea="g">
            <Artwork src="estudio_del_craneo" alt="Estudio del cráneo" />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default ArtworksPage;
