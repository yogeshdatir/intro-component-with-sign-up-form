import { Box, Text } from "@chakra-ui/react";

const TrialBanner = () => {
  return (
    <Box
      sx={{
        background: "#5E54A4",
        boxShadow: "0px 8px 0px rgba(0, 0, 0, 0.14688)",
        borderRadius: "10px",
        marginBottom: "1.5rem",
        textAlign: "center",
        padding: "18px 0",
      }}
    >
      <Text
        sx={{
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "26px",
          textAlign: "center",
          letterSpacing: "0.267857px",
          color: "#FFFFFF",
          width: "100%",
        }}
      >
        <Text as="span" sx={{ fontWeight: 700 }}>
          Try it free 7 days
        </Text>{" "}
        then $20/mo. thereafter
      </Text>
    </Box>
  );
};

export default TrialBanner;
