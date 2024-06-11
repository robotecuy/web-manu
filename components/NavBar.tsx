import Link from "next/link";
import {
  Box,
  Flex,
  Text,
  useDisclosure,
  IconButtonProps as IconButtonChakraProps,
  IconButton as IconButtonChakra,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MenuDrawer, Container, Logo } from "../components";
import { useRef, MutableRefObject } from "react";
import { IconType } from "react-icons";
import { HiMenuAlt3 } from "react-icons/hi";

const menuItems = [
  { id: "statement", text: "Artist Statement", href: "/statement" },
  { id: "artworks", text: "Artworks", href: "/artworks" },
  { id: "photographs", text: "Photographs", href: "/photographs" },
  { id: "exhibitions", text: "Exhibitions", href: "/exhibitions" },
  { id: "contact", text: "Contact", href: "/contact" },
];

type IconButtonProps = {
  buttonProps: IconButtonChakraProps & { ref?: MutableRefObject<null> };
  icon: IconType;
};

const IconButton = ({ buttonProps, icon }: IconButtonProps) => (
  <IconButtonChakra
    {...buttonProps}
    w="3rem"
    bg="transparent"
    icon={
      <Icon
        as={icon}
        w="1.75rem"
        h="1.75rem"
        display="block"
        color="black"
        _hover={{ color: "black" }}
      />
    }
  />
);

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const isLg = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex position="fixed" zIndex={999} w="100%" bg="white">
      <Container maxW="container.xl" px="0">
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/">
            <Box
              _hover={{ backgroundColor: "none" }}
              _active={{ backgroundColor: "transparent" }}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                w="3.5rem"
                h="3.5rem"
              >
                {Logo && <Logo />}
              </Flex>
            </Box>
          </Link>
          {isLg ? (
            <Flex gap="5rem">
              {menuItems.map(({ text, href }) => (
                <Link key={text} href={href}>
                  <Box
                    _hover={{ backgroundColor: "none" }}
                    _active={{ backgroundColor: "transparent" }}
                  >
                    <Text fontFamily="inter">{text}</Text>
                  </Box>
                </Link>
              ))}
            </Flex>
          ) : (
            <IconButton
              buttonProps={{
                ml: "0.25rem",
                "aria-label": "Menu",
                ref: btnRef,
                onClick: onOpen,
                _hover: { backgroundColor: "transparent" },
                //wanna make the button black
                fill: "black",
              }}
              icon={HiMenuAlt3}
            />
          )}
        </Flex>
      </Container>
      <MenuDrawer
        dark={false}
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        menuItems={menuItems}
      />
    </Flex>
  );
};
