import { Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Description = (props: Props) => {
  return (
    <>
      <Heading
        fontSize={["28px", "28px", "28px", "50px"]}
        lineHeight={["36px", "36px", "36px", "55px"]}
        letterSpacing={[
          "-0.291667px",
          "-0.291667px",
          "-0.291667px",
          "-0.520833px",
        ]}
        sx={{
          fontWeight: 700,
          color: "#FFFFFF",
        }}
      >
        Learn to code by watching others
      </Heading>
      <Text
        pt="1.2rem"
        sx={{
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "26px",
          color: "#FFFFFF",
        }}
      >
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </Text>
    </>
  );
};

export default Description;
