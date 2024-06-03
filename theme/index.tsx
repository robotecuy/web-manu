const primary = "#05acc1";
const secondary = "#e53e3e";

const white = "#ffffff";
const black = "#000000";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

export const theme: Record<string, any> = {
  colors: {
    primary: {
      main: primary,
      50: primary,
      100: primary,
      200: primary,
      300: primary,
      400: primary,
      500: primary,
      600: primary,
      700: primary,
      800: primary,
      900: primary,
    },
    secondary: {
      main: secondary,
      50: secondary,
      100: secondary,
      200: secondary,
      300: secondary,
      400: secondary,
      500: secondary,
      600: secondary,
      700: secondary,
      800: secondary,
      900: secondary,
    },
    brand: {
      background: "#fafafa",
      nav: {
        item: {
          color: white,
          _hover: {
            color: "lightgrey",
          },
        },
      },
      navBar: {
        backgroundColor: "#787878",
        borderColor: primary,
        iconButton: {
          color: white,
          _hover: {
            color: white,
          },
        },
      },
      drawerMenu: {
        backgroundColor: "red",
        backdropFilter: "none",
        item: {
          color: black,
          borderColor: white,
        },
      },
    },
  },

  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },

            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
};
