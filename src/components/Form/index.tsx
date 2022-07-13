import { Button, Flex, Text } from "@chakra-ui/react";
import { ChangeEvent, FocusEvent, FormEvent, useState } from "react";
import InputField from "./InputField";

// Todo: Add types

export interface IFormState {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
}

export interface IFormErrorState {
  firstName?: { message: string };
  lastName?: { message: string };
  emailAddress?: { message: string };
  password?: { message: string };
}

export interface IFormPlaceholderState extends IFormState {}

const getInitialFormState: () => IFormState = () => ({
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
});

const getInitialFormPlaceholderState: () => IFormPlaceholderState = () => ({
  firstName: "First Name",
  lastName: "Last Name",
  emailAddress: "Email Address",
  password: "Password",
});

export const validRegex: RegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Form = () => {
  const [formState, setFormState] = useState<IFormState>(getInitialFormState());
  const { firstName, lastName, emailAddress, password } = formState;

  const [formPlaceholderState, setFormPlaceholderState] =
    useState<IFormPlaceholderState>(getInitialFormPlaceholderState());
  const {
    firstName: firstNamePlaceholder,
    lastName: lastNamePlaceholder,
    emailAddress: emailAddressPlaceholder,
    password: passwordPlaceholder,
  } = formPlaceholderState;

  const [errorState, setErrorState] = useState<IFormErrorState>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setFormState((prevState: IFormState) => ({ ...prevState, [name]: value }));
    if (name === "emailAddress" && (!value || !value.match(validRegex))) {
      setFormPlaceholderState((prevState: IFormPlaceholderState) => ({
        ...prevState,
        [name]: "email@example.com",
      }));
      setErrorState((prevState: IFormErrorState) => ({
        ...prevState,
        [name]: { message: `Looks like this is not an email` },
      }));
    } else if (value) {
      setFormPlaceholderState((prevState: IFormPlaceholderState) => ({
        ...prevState,
        [name]: "",
      }));
      setErrorState((prevState: IFormErrorState) => {
        const newState: IFormErrorState = { ...prevState };

        // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'IFormErrorState'. ts(7053)
        // Solution: Resource: https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression#:~:text=The%20error%20%22Element%20implicitly%20has,one%20of%20the%20object's%20keys.
        delete newState[name as keyof IFormErrorState];

        return newState;
      });
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "emailAddress" && (!value || !value.match(validRegex))) {
      setFormPlaceholderState((prevState: IFormPlaceholderState) => ({
        ...prevState,
        [name]: "email@example.com",
      }));
      setErrorState((prevState: IFormErrorState) => ({
        ...prevState,
        [name]: { message: `Looks like this is not an email` },
      }));
    } else if (!value) {
      setFormPlaceholderState((prevState: IFormPlaceholderState) => ({
        ...prevState,
        [name]: "",
      }));

      setErrorState((prevState: any) => ({
        ...prevState,
        [name]: {
          message: `${
            getInitialFormPlaceholderState()[
              name as keyof IFormPlaceholderState
            ]
          } can not be empty`,
        },
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !errorState ||
      JSON.stringify(formState) === JSON.stringify(getInitialFormState())
    )
      return;
    alert(JSON.stringify(formState));
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
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
            padding: "15px 0",
            height: "auto",

            _hover: {
              background: "#77E2B3",
            },
          }}
        >
          <Text>claim your free trial</Text>
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
