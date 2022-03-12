import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import ImageCrousel from "../components/ImageCarousel";
import Updates from "../components/Updates";

const IndexPage: NextPage = () => {
  return (
    <Box h="1000">
      <ImageCrousel />
      <Updates />
    </Box>
  );
};

export default IndexPage;
