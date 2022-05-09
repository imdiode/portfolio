import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          <Flex>
            Diode&nbsp;
            <img alt="diodeIcon" src="/diode.svg" />
          </Flex>
        </Heading>

        <Spacer></Spacer>
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() => window.open("https://www.linkedin.com/in/diode16/")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={() => window.open("https://www.instagram.com/diode.h")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaTwitter />}
          isRound="true"
          onClick={() => window.open("https://www.twitter.com/diode_tech")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://www.github.com/imdiode")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
