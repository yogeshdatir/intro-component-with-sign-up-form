import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import SignUp from "./pages/SignUp";

const variantOutlined = () => ({
  field: {
    _focus: {
      borderColor: "#5E54A4",
      boxShadow: "none",
    },
  },
});

const theme = extendTheme({
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
