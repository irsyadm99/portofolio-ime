import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiJavascript } from "react-icons/si";

function Profile() {
  const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="12" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          1+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Software Engineer, specialised in web app development.
        </Text>
        <Flex direction={isNotSmallScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Flex direction="row">
              <Icon as={DiReact} w="24" h="24" p="4" color="white" />
              <Icon as={SiNextdotjs} w="24" h="24" p="5" color="white" />
            </Flex>
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              ReactJS / NextJS
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallScreen ? 4 : 0}
            bg="blue.600"
            h="30vh"
            w="30vh"
            justify="flex-end"
            // _hover={{ bg: "teal.400" }}
          >
            <Icon color="white" p="4" as={SiTailwindcss} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Tailwind CSS
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Flex direction="row">
              <Icon as={DiHtml5} w="24" h="24" p="4" color="white" />
              <Icon as={DiCss3} w="24" h="24" p="4" color="white" />
            </Flex>
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              HTML&CSS
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallScreen ? 4 : 0}
            bg="blue.600"
            h="30vh"
            w="30vh"
            justify="flex-end"
            // _hover={{ bg: "teal.400" }}
          >
            <Icon color="white" p="4" as={SiJavascript} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Javascript
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
