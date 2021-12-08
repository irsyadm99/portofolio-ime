import React from "react";
import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import { FaFacebookF, FaGoogle, FaTwitter, FaLinkedin } from "react-icons/fa";

function Social() {
  return (
    <HStack spacing="24">
      <Icon as={FaFacebookF} boxSize="50" />
      <Icon as={FaGoogle} boxSize="50" />
      <Icon as={FaTwitter} boxSize="50" />
      <Icon as={FaLinkedin} boxSize="50" />
    </HStack>
  );
}

export default Social;
