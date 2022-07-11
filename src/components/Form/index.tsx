import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import InputField from "./InputField";

// Todo: Add types

const getInitialFormState: any = () => ({
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
});

const getInitialFormPlaceholderState = () => ({
  firstName: "First Name",
  lastName: "Last Name",
  emailAddress: "Email Address",
  password: "Password",
});

export const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type Props = {};

const Form = (props: Props) => {
  const [formState, setFormState] = useState(getInitialFormState());
  const { firstName, lastName, emailAddress, password } = formState;

  const [formPlaceholderState, setFormPlaceholderState] = useState(
    getInitialFormPlaceholderState()
  );
  const {
    firstName: firstNamePlaceholder,
    lastName: lastNamePlaceholder,
    emailAddress: emailAddressPlaceholder,
    password: passwordPlaceholder,
  } = formPlaceholderState;

  const [errorState, setErrorState] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setFormState((prevState: any) => ({ ...prevState, [name]: value }));
    if (name === "emailAddress" && (!value || !value.match(validRegex))) {
      setFormPlaceholderState((prevState: any) => ({
        ...prevState,
        [name]: "email@example.com",
      }));
      setErrorState((prevState: any) => ({
        ...prevState,
        [name]: { message: `Looks like this is not an email` },
      }));
    } else if (value) {
      setFormPlaceholderState((prevState: any) => ({
        ...prevState,
        [name]: "",
      }));
      setErrorState((prevState: any) => {
        const newState = { ...prevState };
        delete newState[name];
        return newState;
      });
    }
  };

  const handleBlur = (e: any) => {
    const {
      target: { name, value },
    } = e;
    if (name === "emailAddress" && (!value || !value.match(validRegex))) {
      setFormPlaceholderState((prevState: any) => ({
        ...prevState,
        [name]: "email@example.com",
      }));
      setErrorState((prevState: any) => ({
        ...prevState,
        [name]: { message: `Looks like this is not an email` },
      }));
    } else if (!value) {
      setFormPlaceholderState((prevState: any) => ({
        ...prevState,
        [name]: "",
      }));
      const fieldNames: any = getInitialFormPlaceholderState();
      setErrorState((prevState: any) => ({
        ...prevState,
        [name]: {
          message: `${fieldNames[name]} can not be empty`,
        },
      }));
    }
  };

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        if (!errorState) return;
        alert(JSON.stringify(formState));
      }}
      noValidate
    >
      <Flex
        direction="column"
        p={["1.5rem", "1.5rem", "1.5rem", "2.5rem"]}
        bgColor="#fff"
        boxShadow="0px 8px 0px rgba(0, 0, 0, 0.14688)"
        borderRadius="10px"
      >
        <InputField
          placeholder={firstNamePlaceholder}
          name="firstName"
          type="text"
          value={firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          errorState={errorState}
        />
        <InputField
          placeholder={lastNamePlaceholder}
          name="lastName"
          type="text"
          value={lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          errorState={errorState}
        />
        <InputField
          placeholder={emailAddressPlaceholder}
          name="emailAddress"
          type="email"
          value={emailAddress}
          onChange={handleChange}
          onBlur={handleBlur}
          errorState={errorState}
        />
        <InputField
          placeholder={passwordPlaceholder}
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
          errorState={errorState}
        />
        <Button
          type="submit"
          sx={{
            background: "#38CC8B",
            boxShadow: "inset 0px -4px 0px rgba(0, 0, 0, 0.0908818)",
            borderRadius: "5px",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "26px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#FFFFFF",

            _hover: {
              background: "#77E2B3",
            },
          }}
        >
          claim your free trial
        </Button>
        <Text
          sx={{
            marginTop: "8px",
            fontWeight: 400,
            fontSize: "11px",
            lineHeight: "26px",
            textAlign: "center",
            color: "#BAB7D4",
          }}
        >
          By clicking the button, you are agreeing to our{" "}
          <Text
            as="span"
            sx={{
              fontWeight: 700,
              fontSize: "11px",
              lineHeight: "26px",
              textAlign: "center",
              color: "#FF7979",
            }}
          >
            Terms and Services
          </Text>
        </Text>
      </Flex>
    </form>
  );
};

export default Form;
