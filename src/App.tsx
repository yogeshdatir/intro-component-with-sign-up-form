import { ChakraProvider, Box, extendTheme, Text, Link } from "@chakra-ui/react";
import SignUp from "./pages/SignUp";
import "@fontsource/poppins";

const variantOutlined = () => ({
  field: {
    _focus: {
      borderColor: "#5E54A4",
      boxShadow: "none",
    },
  },
});

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Input: {
      variants: {
        outline: variantOutlined,
        filled: variantOutlined,
      },
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box as="main">
      <SignUp />
      <footer>
        <Text sx={{ fontSize: "11px", textAlign: "center" }}>
          Challenge by{" "}
          <Link
            href="https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1"
            target="_blank"
          >
            Frontend Mentor
          </Link>
          . Coded by{" "}
          <Link
            href="https://www.frontendmentor.io/profile/yogeshdatir"
            target="_blank"
          >
            Yogesh D
          </Link>
          .
        </Text>
      </footer>
    </Box>
  </ChakraProvider>
);
