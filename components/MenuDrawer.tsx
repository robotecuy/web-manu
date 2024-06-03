import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import { NavItem } from "./Nav";
import { SocialNetworks } from "./SocialNetworks";

const _backgroundColor = "brand.drawerMenu.backgroundColor";
const _menuItemColor = "brand.drawerMenu.item.color";
const _menuItemBorderColor = "brand.drawerMenu.item.borderColor";

type MenuDrawerItemsProps = {
  items: NavItem[];
  onClick(): void;
};

const MenuDrawerItems = ({ items }: MenuDrawerItemsProps) => (
  <nav>
    <Flex direction="column" as="ol" listStyleType="none">
      <Box h="2rem" />
      {items.map(({ id, text, href }) => (
        <li key={id}>
          <Link href={href}>
            <Text
              p="1rem"
              color={_menuItemColor}
              borderBottom="solid 1px"
              borderColor={_menuItemBorderColor}
            >
              {text}
            </Text>
          </Link>
        </li>
      ))}
    </Flex>
  </nav>
);

type MenuItem = {
  id: string;
  text: string;
  href: string;
};

type MenuDrawerProps = Omit<DrawerProps, "children"> & {
  dark?: boolean;
  menuItems: Array<MenuItem>;
};

export const MenuDrawer = ({
  dark,
  isOpen,
  onClose,
  finalFocusRef,
  menuItems,
}: MenuDrawerProps) => (
  <Drawer
    isOpen={isOpen}
    placement="left"
    onClose={onClose}
    finalFocusRef={finalFocusRef}
  >
    <DrawerOverlay />
    <DrawerContent
      bg={_backgroundColor}
      backdropFilter="saturate(180%) blur(20px)"
    >
      <DrawerCloseButton color={_menuItemColor} />
      <DrawerBody p=".5rem 0">
        <MenuDrawerItems items={menuItems} onClick={onClose} />
        <Box p="2rem 0">
          <Center>
            <SocialNetworks
              dark={dark}
              color={_menuItemColor}
              size="2rem"
              hide={["whatsapp", "tiktok", "youtube"]}
            />
          </Center>
        </Box>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
