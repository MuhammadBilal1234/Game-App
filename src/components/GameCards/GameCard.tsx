import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import CardSlide from "../../../public/assets/CardSilde.png";
import GameCard from "../common/GameCard";
import HighCrash from "../../../public/assets/GameCardImageLarge.png";
import Trenball from "../../../public/assets/GameCardImageSmall.png";

import Dice from "../../../public/assets/Dice.png";
import Limba from "../../../public/assets/Limbo.png";
import Mine from "../../../public/assets/Mine.png";
import Oriental from "../../../public/assets/Oriental.png";
import Plinko from "../../../public/assets/Plinko.png";
import Roulette from "../../../public/assets/Roulette.png";
import Baccarat from "../../../public/assets/Baccarat.png";
import Egyptian from "../../../public/assets/Egyptian.png";
import Hilo from "../../../public/assets/Hilo.png";
import HashDice from "../../../public/assets/HashDice.png";

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
            <GameCard image={HighCrash} width="300" height="200" />
            <GameCard image={Trenball} width="200" height="200" />
            <GameCard image={Plinko} width="200" height="200" />
            <GameCard image={Limba} width="200" height="200" />
            <GameCard image={Mine} width="200" height="200" />
            <GameCard image={Oriental} width="200" height="200" />
            {/* <GameCard image={GameCardImageSmall} width="200" height="200" /> */}
          </Flex>
          <Flex ml="2" p="2" minW="100%" m="auto" wrap="wrap">
            <GameCard image={Dice} width="300" height="200" />
            {/* <GameCard image={GameCardImageSmall} width="200" height="200" /> */}
            <GameCard image={Egyptian} width="200" height="200" />
            <GameCard image={Hilo} width="200" height="200" />
            <GameCard image={Roulette} width="200" height="200" />
            <GameCard image={Baccarat} width="200" height="200" />
            <GameCard image={HashDice} width="200" height="200" />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
