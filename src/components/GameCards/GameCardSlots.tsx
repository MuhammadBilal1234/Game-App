import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import CardSlide from "../../../public/assets/CardSilde.png";
import GameCard from "../common/GameCard";

import Monkey from "../../../public/assets/Monkey.png";
import Slime from "../../../public/assets/Slime.png";
import Whale from "../../../public/assets/Whale.png";
import HyperGold from "../../../public/assets/HyperGold.png";
import Ozzy from "../../../public/assets/Ozzy.png";
import Piper from "../../../public/assets/Piper.png";
import SunEgypt from "../../../public/assets/SunEgypt.png";
import Mystery from "../../../public/assets/Mystery.png";
import MagicEgg from "../../../public/assets/MagicEgg.png";
import HotIce from "../../../public/assets/HotIce.png";
import Joker from "../../../public/assets/Joker.png";
import Mirror from "../../../public/assets/Mirror.png";

interface Props {
  title: string;
}

const IndexPage: NextPage<Props> = ({ title }) => {
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
        <span style={{ color: "#e70b6c" }}>{title}</span> GAMES
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
            <GameCard image={Monkey} width="200" height="200" />
            <GameCard image={Slime} width="200" height="200" />
            <GameCard image={Whale} width="200" height="200" />
            <GameCard image={HyperGold} width="200" height="200" />
            <GameCard image={Ozzy} width="200" height="200" />
            <GameCard image={Piper} width="200" height="200" />
          </Flex>
          <Flex ml="2" p="2" minW="100%" m="auto" wrap="wrap">
            <GameCard image={SunEgypt} width="200" height="200" />
            <GameCard image={Mystery} width="200" height="200" />
            <GameCard image={MagicEgg} width="200" height="200" />
            <GameCard image={HotIce} width="200" height="200" />
            <GameCard image={Joker} width="200" height="200" />
            <GameCard image={Mirror} width="200" height="200" />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
