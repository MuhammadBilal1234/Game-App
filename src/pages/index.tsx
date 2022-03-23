import { Box, Flex, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import ImageCrousel from "../components/ImageCarousel";
import Updates from "../components/Updates";
import GameCard from "../components/GameCard";
import Signin from "../components/Signin";
import { useState } from "react";
import OptionIcon from "../../public/assets/OptionIcon.png";
import Image from "next/image";
import GameCardOption from "../components/GameCardOption";

const IndexPage: NextPage = () => {
  const [showCard, setShowCard] = useState(1);

  return (
    <Box>
      <GameCardOption setShowCard={setShowCard} />
      {(showCard == 1 || showCard == 1) && <GameCard title="IN-HOUSE" />}
      {(showCard == 1 || showCard == 2) && <GameCard title="ORIGINAL" />}
      {(showCard == 1 || showCard == 3) && <GameCard title="SLOTS" />}
    </Box>
  );
};

export default IndexPage;
