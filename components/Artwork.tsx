import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

type ArtworkProps = {
  src: string;
  alt: string;
};

export const Artwork = ({ src, alt }: ArtworkProps) => {
  return (
    <Box position="relative" h="32rem" overflow="hidden">
      <Image
        src={`/artworks/${src}.jpg`}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.5)"
        opacity="0"
        transition="opacity 0.3s ease"
        _hover={{ opacity: 1 }}
        display="flex"
        alignItems="flex-end"
        pb="2rem"
        pl="1.5rem"
      >
        <Text color="white" fontSize="xl" fontWeight="bold">
          {alt}
        </Text>
      </Box>
    </Box>
  );
};
