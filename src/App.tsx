import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
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
    </Box>
  </ChakraProvider>
);
