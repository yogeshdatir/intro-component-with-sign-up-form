import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Description from "../components/Description";
import Form from "../components/Form";
import TrialBanner from "../components/Form/TrialBanner";
import BackgroundImageDesktop from "../images/bg-intro-desktop.png";
import BackgroundImageMobile from "../images/bg-intro-mobile.png";

const SignUp = () => {
  const BackgroundImage = useBreakpointValue({
    base: BackgroundImageMobile,
    md: BackgroundImageDesktop,
  });

  return (
    <Flex minH="97.9vh" bgColor="#FF7979" justify="center" align="center">
      <Flex
        minH="100%"
        bgImage={BackgroundImage}
        bgRepeat="no-repeat"
        bgSize="cover"
        justify="center"
        align="center"
        p={["5.5rem 0", "5.5rem 0", 0]}
      >
        <Flex
          direction={["column", "column", "column", "row"]}
          maxW={["90%", "90%", "90%", "75%"]}
          justify="space-between"
          align="center"
        >
          <Flex
            direction="column"
            w={["100%", "100%", "70%", "47%"]}
            pb={["4rem", "4rem", "4rem", 0]}
            textAlign={["center", "center", "center", "left"]}
          >
            <Description />
          </Flex>
          <Flex direction="column" w={["100%", "100%", "70%", "48%"]}>
            <TrialBanner />
            <Form />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;
