import { WarningIcon } from "@chakra-ui/icons";
import {
  ChakraStyledOptions,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const InputFieldStyle = {
  background: "#FFFFFF",
  border: "1px solid #DEDEDE",
  borderRadius: "5px",
  height: "3.5rem",
  paddingX: "1.5rem",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "26px",
  letterSpacing: "0.25px",
  color: "#3D3B48",

  "::placeholder": {
    color: "#3D3B48",
    mixBlendMode: "normal",
    opacity: 0.75,
  },

  ":focus": {
    border: "1px solid #5E54A4",
  },
};

const ErrorInputFieldPlaceholderStyle = {
  "::placeholder": {
    color: "#FF7979",
    mixBlendMode: "normal",
    opacity: 0.75,
  },
};

const InputField = ({ errorState, ...rest }: ChakraStyledOptions) => {
  const { name } = rest;
  return (
    <FormControl isInvalid={errorState[name]} mb="1rem">
      <InputGroup>
        <Input
          sx={
            errorState[name]
              ? { ...InputFieldStyle, ...ErrorInputFieldPlaceholderStyle }
              : InputFieldStyle
          }
          {...rest}
        />
        {errorState[name] && (
          <InputRightElement
            h="100%"
            children={<WarningIcon w={6} h={6} color="#FF7979" />}
          />
        )}
      </InputGroup>
      <FormErrorMessage
        justifyContent="flex-end"
        sx={{
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: "11px",
          lineHeight: "16px",
          textAlign: "right",
          color: "#FF7979",
          marginTop: "6px",
        }}
      >
        {errorState[name]?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
