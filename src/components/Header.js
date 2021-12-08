import React from "react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "light";
  const isNotSmallScreen = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Irsyad Musyaffa
          </Text>
          <Text color={isDark ? "gray.400" : "gray.600"}>
            Computer Science Undergraduate From IPB University, Software
            Engineer enthusiasm especially at Frontend
          </Text>
        </Box>
        <Circle
          // position="absolute"
          bg="white"
          // opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="center"
          boxShadow="lg"
        />
        {/* <Image
          alignSelf="center"
          mt={isNotSmallScreen ? "0" : "12"}
          mb={isNotSmallScreen ? "0" : "12"}
          borderRadius="full"
          boxShadow="lg"
          boxSize="300px"
        /> */}
      </Flex>
    </Stack>
  );
}

export default Header;
