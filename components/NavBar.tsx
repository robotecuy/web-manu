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
import {
  useEffect,
  useRef,
  useState,
  MutableRefObject,
  ElementType,
} from "react";
import { IconType } from "react-icons";
import { HiMenuAlt2 } from "react-icons/hi";

const _backgroundColor = "brand.navBar.backgroundColor";

const menuItems = [
  { id: "fotografias", text: "Fotografías", href: "/fotografias" },
  { id: "pinturas", text: "Pinturas", href: "/pinturas" },
  { id: "trabajos", text: "Trabajos", href: "/trabajos" },
  { id: "contacto", text: "Contacto", href: "/contacto" },
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
        color="white"
        _hover={{ color: "white" }}
      />
    }
  />
);

// type NavBarProps = {
//   Logo?: ElementType;
// };

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const isLg = useBreakpointValue({ base: false, lg: true });

  const [headerColor, setHeaderColor] = useState("transparent");

  const listenScrollEvent = () => {
    if (window.scrollY > 250) {
      setHeaderColor(_backgroundColor);
    } else {
      setHeaderColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <Flex
      position="fixed"
      zIndex={999}
      w="100%"
      bg={headerColor}
      animation="ease-out"
      transitionDuration="300ms"
    >
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/">
            <Box
              _hover={{ backgroundColor: "none" }}
              _active={{ backgroundColor: "transparent" }}
            >
              <Box w="4rem" h="4rem" position="relative">
                {Logo && <Logo />}
              </Box>
            </Box>
          </Link>
          {isLg ? (
            <Flex gap="1rem">
              {menuItems.map(({ text, href }) => (
                <Link key={text} href={href}>
                  <Box
                    color="white"
                    fontSize="1.25rem"
                    fontWeight="bold"
                    p="0.5rem"
                    _hover={{ backgroundColor: "none" }}
                    _active={{ backgroundColor: "transparent" }}
                  >
                    <Text>{text}</Text>
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
              }}
              icon={HiMenuAlt2}
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
