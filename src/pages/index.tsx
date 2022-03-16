import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import ImageCrousel from "../components/ImageCarousel";
import Updates from "../components/Updates";
import GameCard from "../components/GameCard";

const IndexPage: NextPage = () => {
  return (
    <Box h="2000">
      <ImageCrousel />
      <Updates />
      <GameCard />
    </Box>
  );
};

export default IndexPage;
