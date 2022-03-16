import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import CardSlide from "../../public/assets/CardSilde.png";
import GameCard from "./common/GameCard";
import GameCardImageLarge from "../../public/assets/GameCardImageLarge.png";
import GameCardImageSmall from "../../public/assets/GameCardImageSmall.png";

const IndexPage: NextPage = () => {
  return (
    <Box w="96%" m="auto" mt="10">
      <Box
        // bg="black"
        h="70px"
        w="130px"
        pt="2"
        pl="7"
        color="white"
        borderTopLeftRadius="15"
        position="absolute"
        bgGradient="linear-gradient(to right,#1c1e22,#1c1e22)"
        fontWeight="bold"
      >
        <span style={{ color: "#e70b6c" }}>IN-HOUSE</span> GAMES
      </Box>
      <Box position="relative" ml="130px" h="70px">
        <Image src={CardSlide} layout="fixed" height={70} />
      </Box>
      <Box
        bgGradient="linear-gradient(to right,#1c1e22,#1c1e22)"
        borderTopRightRadius="20"
        borderBottomRightRadius="20"
        borderBottomLeftRadius="20"
      >
        <Box pl="3" pb="3">
          <Flex ml="2" p="2" minW="100%" m="auto" wrap="wrap">
            <GameCard image={GameCardImageLarge} width="300" height="200" />
            <GameCard image={GameCardImageSmall} width="200" height="200" />
            <GameCard image={GameCardImageSmall} width="200" height="200" />
            <GameCard image={GameCardImageSmall} width="200" height="200" />
            {/* <GameCard image={GameCardImageSmall} width="200" height="200" /> */}
          </Flex>
          <Flex ml="2" p="2" minW="100%" m="auto" wrap="wrap">
            <GameCard image={GameCardImageLarge} width="300" height="200" />
            {/* <GameCard image={GameCardImageSmall} width="200" height="200" /> */}
            <GameCard image={GameCardImageSmall} width="200" height="200" />
            <GameCard image={GameCardImageSmall} width="200" height="200" />
            <GameCard image={GameCardImageSmall} width="200" height="200" />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
