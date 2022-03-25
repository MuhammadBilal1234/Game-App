import { Box, Flex, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import ImageCrousel from "../components/ImageCarousel";
import Updates from "../components/Updates";
import Signin from "../components/Signin";
import { useState } from "react";
import OptionIcon from "../../public/assets/OptionIcon.png";
import Image from "next/image";
import GameCardOption from "../components/GameCardOption";

import GameCard from "../components/GameCards/GameCard";
import GameCardSlots from "../components/GameCards/GameCardSlots";
import GameCardCasino from "../components/GameCards/GameCardCasino";

const IndexPage: NextPage = () => {
  const [showCard, setShowCard] = useState(1);

  return (
    <Box h={showCard == 1 ? "100%" : "100vh"}>
      <GameCardOption setShowCard={setShowCard} />
      {(showCard == 1 || showCard == 2) && <GameCard title="IN-HOUSE" />}
      {(showCard == 1 || showCard == 3) && <GameCardSlots title="SLOTS" />}
      {(showCard == 1 || showCard == 4) && (
        <GameCardCasino title="LIVE CASINO" />
      )}
    </Box>
  );
};

export default IndexPage;
