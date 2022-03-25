import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import CardSlide from "../../../public/assets/CardSilde.png";
import GameCard from "../common/GameCard";

import Piper from "../../../public/assets/Piper.png";
import SunEgypt from "../../../public/assets/SunEgypt.png";
import Mystery from "../../../public/assets/Mystery.png";
import MagicEgg from "../../../public/assets/MagicEgg.png";
import HotIce from "../../../public/assets/HotIce.png";
import Joker from "../../../public/assets/Joker.png";
import Mirror from "../../../public/assets/Mirror.png";

import Galaxy2 from "../../../public/assets/Galaxy2.png";
import Galaxy3 from "../../../public/assets/Galaxy3.png";
import Galaxy4 from "../../../public/assets/Galaxy4.png";
import Galaxy5 from "../../../public/assets/Galaxy5.png";
import Galaxy6 from "../../../public/assets/Galaxy6.png";
import English from "../../../public/assets/English.png";
import BackBo from "../../../public/assets/BacBo.png";
import Bulagaria1 from "../../../public/assets/Bulgaria1.png";
import DragonTiger from "../../../public/assets/DragonTiger.png";
import Burgas from "../../../public/assets/Burgas.png";
import PeekBaccarat from "../../../public/assets/PeekBaccarat.png";
import Speed from "../../../public/assets/Spee.png";

interface Props {
  title: string;
}

const IndexPage: NextPage<Props> = ({ title }) => {
  return (
    <Box w="96%" m="auto" mt="10" mb="40px">
      <Box
        // bg="black"
        h="70px"
        w="130px"
        pt="4"
        // pt="5"
        // pt="6"

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
            <GameCard image={Galaxy2} width="200" height="200" />
            <GameCard image={Galaxy3} width="200" height="200" />
            <GameCard image={Galaxy4} width="200" height="200" />
            <GameCard image={Galaxy5} width="200" height="200" />
            <GameCard image={Galaxy6} width="200" height="200" />
            <GameCard image={English} width="200" height="200" />
          </Flex>
          <Flex ml="2" p="2" minW="100%" m="auto" wrap="wrap">
            <GameCard image={BackBo} width="200" height="200" />
            <GameCard image={Bulagaria1} width="200" height="200" />
            <GameCard image={DragonTiger} width="200" height="200" />
            <GameCard image={Burgas} width="200" height="200" />
            <GameCard image={PeekBaccarat} width="200" height="200" />
            <GameCard image={Speed} width="200" height="200" />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
