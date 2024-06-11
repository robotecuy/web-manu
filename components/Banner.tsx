import Link from "next/link";
import { Image, useBreakpointValue, Box, Skeleton } from "@chakra-ui/react";
import { Carousel } from "./Carousel";
import { useEffect, useState } from "react";

// type BannerProps = {
//   section: string;
//   showNavigation?: boolean;
// };

export const Banner = (/* { section, showNavigation }: BannerProps */) => {
  //   const { isLoading, error, data = [] } = useBannerList();
  const [bg, setBg] = useState("#383838");

  const isMd = useBreakpointValue({
    base: false,
    md: true,
  });

  //   const banners = data
  //     .filter((b) => b.section === section)
  //     .sort((a, b) => a.indx - b.indx);

  //   useEffect(() => {
  //     if (!isLoading && banners?.length) {
  //       setBg(banners[0].color);
  //     }
  //   }, [isLoading, banners]);

  return (
    <Box bg={bg}>
      <Carousel slideHeight="100%" slidesPerView={1}>
        <Image alt={"hola"} src={"./aguaviva.jpg"} objectFit="cover" />
        <Image alt={"hola"} src={"./aguaviva.jpg"} objectFit="cover" />
        <Image alt={"hola"} src={"./aguaviva.jpg"} objectFit="cover" />
      </Carousel>
    </Box>
  );
};
