import { Box, VStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "light";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="lg" fontWeight="semibold" color="cyan.400">
          MyPortofolio
        </Heading>
        <Spacer></Spacer>
        <Box>
          <IconButton size="lg" icon={<FaLinkedin />} isRound="true" />
          <IconButton size="lg" ml={2} icon={<FaInstagram />} isRound="true" />
          <IconButton size="lg" ml={2} icon={<FaGithub />} isRound="true" />
          <IconButton
            size="lg"
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          />
        </Box>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
