import { Box, Flex, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import ImageCrousel from "../components/ImageCarousel";
import Updates from "../components/Updates";
import GameCard from "../components/GameCard";
import Signin from "../components/Signin";
import { useState } from "react";
import OptionIcon from "../../public/assets/OptionIcon.png";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setShowCard: any;
}

const IndexPage: NextPage<Props> = ({ setShowCard }) => {
  return (
    <Box
      // bg="red"
      h="200"
      w="100"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex" flexWrap="wrap">
        {/* Lobby */}
        <Box
          display="flex"
          bg="blackAlpha.400"
          color="whiteAlpha.900"
          p="1.25rem"
          borderRadius="1.25rem"
          mr=".25rem"
          fontSize="1.25rem"
          cursor="pointer"
          _hover={{
            color: "grey",
          }}
          onClick={() => setShowCard(1)}
        >
          <Box h="30px" w="30px" mr=".25rem">
            <Image src={OptionIcon} />
          </Box>
          <Box>Lobby</Box>
        </Box>
        {/* Original */}
        <Box
          display="flex"
          bg="blackAlpha.400"
          color="whiteAlpha.900"
          p="1.25rem"
          borderRadius="1.25rem"
          mr=".25rem"
          fontSize="1.25rem"
          cursor="pointer"
          _hover={{
            color: "grey",
          }}
          onClick={() => setShowCard(2)}
        >
          <Box h="30px" w="30px" mr=".25rem">
            <Image src={OptionIcon} />
          </Box>
          <Box>Original</Box>
        </Box>
        {/* Slots */}
        <Box
          display="flex"
          bg="blackAlpha.400"
          color="whiteAlpha.900"
          p="1.25rem"
          borderRadius="1.25rem"
          mr=".25rem"
          fontSize="1.25rem"
          cursor="pointer"
          _hover={{
            color: "grey",
          }}
          onClick={() => setShowCard(3)}
        >
          <Box h="30px" w="30px" mr=".25rem">
            <Image src={OptionIcon} />
          </Box>
          <Box>Slots</Box>
        </Box>

        {/* Live Casino */}
        <Box
          display="flex"
          bg="blackAlpha.400"
          color="whiteAlpha.900"
          p="1.25rem"
          borderRadius="1.25rem"
          mr=".25rem"
          fontSize="1.25rem"
          cursor="pointer"
          _hover={{
            color: "grey",
          }}
        >
          <Box h="30px" w="30px" mr=".25rem">
            <Image src={OptionIcon} />
          </Box>
          <Box>Live Casino</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
