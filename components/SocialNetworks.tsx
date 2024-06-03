import Link from "next/link";
import { Flex, Icon as ChakraIcon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTiktok, IoLogoWhatsapp } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialNetworksItems = [
  { id: "facebook", href: "https://www.facebook.com/robotecacademy" },
  { id: "instagram", href: "https://www.instagram.com/robotecacademy" },
  { id: "tiktok", href: "https://www.tiktok.com/@robotecacademy" },
  { id: "whatsapp", href: "https://wa.me/5491130500000" },
  { id: "youtube", href: "https://www.youtube.com/c/robotecacademy" },
  { id: "linkedin", href: "https://www.linkedin.com/company/robotecacademy" },
  { id: "twitter", href: "https://twitter.com/robotecacademy" },
];

type Icon = {
  icon: IconType;
  hoverColor: string;
  hoverColorDark?: string;
};

const icons: Record<string, Icon> = {
  facebook: { icon: MdFacebook, hoverColor: "#4167b1" },
  instagram: { icon: AiFillInstagram, hoverColor: "#ed1d67" },
  tiktok: {
    icon: IoLogoTiktok,
    hoverColor: "#111111",
    hoverColorDark: "white",
  },
  whatsapp: { icon: IoLogoWhatsapp, hoverColor: "#25D366" },
  youtube: { icon: FaYoutube, hoverColor: "#c4302b" },
  linkedin: { icon: FaLinkedin, hoverColor: "#0a66c2" },
  twitter: { icon: FaTwitter, hoverColor: "#1da1f2" },
};

type SocialNetworksProps = {
  dark?: boolean;
  color?: string;
  size?: string;
  gap?: string;
  hide?: string[];
};

export const SocialNetworks = ({
  dark = false,
  color = "black",
  size = "1rem",
  gap = "1rem",
  hide = [],
}: SocialNetworksProps) => (
  <nav>
    <Flex as="ol" alignItems="center" listStyleType="none" gap={gap}>
      {socialNetworksItems
        .filter(({ id }) => !hide.includes(id))
        .map(({ id, href }) => (
          <li key={id}>
            <Link href={href} target="_blank">
              <ChakraIcon
                as={icons[id].icon}
                w={size}
                h={size}
                display="block"
                color={color}
              />
            </Link>
          </li>
        ))}
    </Flex>
  </nav>
);
