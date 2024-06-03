import {
  Container as ContainerChakra,
  ContainerProps,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Container = (props: ContainerProps) => {
  const maxW = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "none",
    lg: "80rem",
  });

  return <ContainerChakra maxW={maxW} {...props} />;
};
